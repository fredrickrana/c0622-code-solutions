/* exported isAnagram */

// use the replaceAll method to replace the spaces within the string to an empty string. This would delete any of the spaces within the string.
// remove the spaces for both firstString and secondString.
// some words use the same letter multiple times and would bypass the includes method, so create two counter variables with the value of zero.
// check to see if a character is used more than once. go through the firstString and compare whether a character is used twice. if it is, increment / add one to the counter variable.
// go through the secondString and do the same, incrementing / adding one to the second counter variable whenever a character is used twice.
// go through one of the strings and use the includes method to check whether each character is included within the second string. Also, if both counter variables are not equal to each other, return false.
// otherwise return true

function isAnagram(firstString, secondString) {
  var noSpaceOne = firstString.replaceAll(' ', '');
  var noSpaceTwo = secondString.replaceAll(' ', '');
  var word = 0;
  var wordTwo = 0;
  for (var i = 0; i < noSpaceTwo.length; i++) {
    for (var x = 0; x < noSpaceTwo.length; x++) {
      if (noSpaceTwo[i] === noSpaceTwo[x]) {
        wordTwo++;
      }
    }
  }
  for (var a = 0; a < noSpaceOne.length; a++) {
    for (var b = 0; b < noSpaceOne.length; b++) {
      if (noSpaceOne[a] === noSpaceOne[b]) {
        word++;
      }
    }
  }
  for (var q = 0; q < noSpaceOne.length; q++) {
    if ((noSpaceTwo.includes(noSpaceOne[q]) === false) || word !== wordTwo) {
      return false;
    }
  }
  return true;
}
