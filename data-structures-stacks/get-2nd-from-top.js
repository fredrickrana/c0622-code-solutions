/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  if (first === undefined) {
    return undefined;
  }
  const second = stack.peek();
  stack.push(first);
  return second;
}
