module.exports = function check(str, bracketsConfig) {
  const brackets = [];
  const duplicate = [];
  let order = true;
  bracketsConfig.flat().forEach((element, index, array) => {if (array[index] === array[[index + 1]]) {duplicate.push(element)}});
  str.split('').forEach(element => {
    if (duplicate.includes(element)) {if (brackets[brackets.length-1] === element) {brackets.pop()} else {brackets.push(element)}}
    else if (bracketsConfig.flat().findIndex((e) => {return e === element}) % 2 === 0) {brackets.push(element)}
    else if (bracketsConfig.flat().findIndex((e) => {return e === element}) -
            bracketsConfig.flat().findIndex((e) => {return e === brackets[brackets.length-1]}) === 1) {brackets.pop()}
    else {order = false}});
  return (brackets.join('') === '' && order);
}