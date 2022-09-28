/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = list.data;
  list.data = list.next.data;
  list.next.data = first;
  return list;
}
