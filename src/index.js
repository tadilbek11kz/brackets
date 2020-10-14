module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (const element of str.split('')) {
    if (stack[0] === element) {
      stack.shift();
    } else if (brackets[element]) {
      stack.unshift(brackets[element]);
    } else {
      return false;
    }
  }
  return stack.length === 0;
}