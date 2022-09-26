/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  const array = [];
  while (stack.peek() !== undefined) {
    const pop = stack.pop();
    array.push(pop);
  }
  return Math.max(...array);
}
