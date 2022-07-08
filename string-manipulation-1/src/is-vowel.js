/* exported isVowel */

// Vowels include: a, e, i, o, u
// make an array with all vowels
// take the value of char and check if its value is equal any of the elements in the array
// go through each element in the vowels array
// use the toLowerCase method to compare the lowercase version of the character with the characters in the vowels array
// if the character is equal to an element in the array, return true
// if the character is not equal to an element in the array, return false

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
