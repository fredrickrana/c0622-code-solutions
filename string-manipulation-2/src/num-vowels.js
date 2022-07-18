/* exported numVowels */

// create a list of all the vowels and store into an array
// set up a counter variable to be updated that would keep track of the amount of vowels in the string
// set the string to all lowercase characters in order to compare to its lowercase vowels
// go through each character of the string as well as each vowel
// check to see if they are equal and if they are then increment the counter variable by one
// continue until the end of the string
// return the counter variable from the function

function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var numberOfVowels = 0;
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < lowerCase.length; i++) {
    for (var x = 0; x < vowels.length; x++) {
      if (lowerCase[i] === vowels[x]) {
        numberOfVowels++;
      }
    }
  }
  return numberOfVowels;
}
