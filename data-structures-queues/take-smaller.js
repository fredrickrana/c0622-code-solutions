/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const front = queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }
  if (front < queue.peek()) {
    const second = queue.dequeue();
    queue.enqueue(second);
    return front;
  } else if (front === queue.peek()) {
    const second = queue.dequeue();
    queue.enqueue(second);
    return front;
  } else if (front > queue.peek()) {
    const second = queue.peek();
    queue.dequeue();
    queue.enqueue(front);
    return second;
  }
}
