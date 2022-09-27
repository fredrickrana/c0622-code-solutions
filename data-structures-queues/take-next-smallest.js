/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const front = queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }
  while (front < queue.peek()) {
    const second = queue.dequeue();
    queue.enqueue(second);
  }
  return queue.peek();
}
