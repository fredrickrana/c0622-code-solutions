/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let number = 0;
  while (number < index) {
    const front = queue.dequeue();
    number++;
    queue.enqueue(front);
  }
  return queue.dequeue();
}
