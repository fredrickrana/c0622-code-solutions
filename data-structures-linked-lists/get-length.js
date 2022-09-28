/* exported getLength */

function getLength(list) {
  let number = 1;
  while (list.next) {
    number++;
    list = list.next;
  }
  return number;
}
