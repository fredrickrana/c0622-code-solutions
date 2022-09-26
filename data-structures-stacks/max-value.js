/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let highestValue = stack.peek();
  while (stack.peek() !== undefined) {
    const pop = stack.pop();
    if (pop > highestValue) {
      highestValue = pop;
    }
  }
  return highestValue;
}
