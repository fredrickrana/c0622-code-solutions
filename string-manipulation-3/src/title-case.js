/* exported titleCase */

// NOTES
// First word of title and subtitles should be capitalized
// Capitalize the letters that come after a hyphen
// Lowercase all conjunctions, articles, and prepositions (with the exception of being the first word in the title or after a semi-colon)
// javascript is spelled JavaScript
// API is an acronym that should always be capitalized

// create a function that capitalizes the first letter of each word
// the initial function will be named titleCase with paramter 'string'
// create an empty string for data output
// capitalize all characters within the string
// add the first character to the initial empty string
// go through the rest of the characters within the string
// each character will be added onto the initial empty string in lowercase
// the exception would be if the character comes after a space (' ') or after a hyphen ('-')
// if the character within the string is a space or hyphen, add that character and change the following character to uppercase, then add that character to the intial empty string as well
// once all the necessary letters have been capitalized, continue to check for additional conditions, such as checking for conjunctions, articles, and prepositions

// create an list of items containing all conjunctions, articles, and prepositions as well as the special cased words 'javascript' and 'api'
// create a function that takes certain conditions and alters the list of following list of items
// create an empty string for data output
// use the split method to separate the string by spaces
// go through each word within the string
// for each word that is being checked, compare to the list of unique words
// create a condition that checks if the word is equal to any of the unique words in the list
// if a word if equal to a word in the list, add it to the initial empty string in lowercase, followed by a space, and move on to the next word
// if comparing the word javascript, create a condition where the S in 'JavaScript' is capitalized
// add the altered javascript word onto the string, followed by a space, if there are additional words to be checked, and if so, move on to the next word
// if the word that is being compared has a semi-colon at the end, add a semi-colon to the intial empty string
// if comparing the word api, create a condition where the word api is capitalized to 'API'
// add the capitalized word to the intial empty string, followed by a space, if there are additional words to be checked, and if so, move on to the next word
// continue to add each word onto the empty string with spaces after each word, assuming that there are more words to be checked
// once all the necessary words have been altered, check to capitalize the letters with the condition of being the first character and coming after a semi-colon

// create a function that takes into account the condition of a semi-colon
// create an empty string for data output
// capitalize the first character and add onto the initial empty string
// within the function, go through each character in the string starting from the second character
// if the character that is being checked is a semi-colon, add the semi-colon, add a space, and add uppercased version of the following character to the initial empty string
// if the character that is being checked within the string is not a semi-colon, add the character onto the intitial empty string
// apply the following function to the intial titleCase function
// return the data from the function

var uniqueWords = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and', 'or', 'nor', 'but', 'a', 'an', 'the', 'javascript', 'api'];

function titleCase(string) {
  var title = '';
  var upperCase = string.toUpperCase();
  title += upperCase[0];
  for (var i = 1; i < upperCase.length; i++) {
    if (upperCase[i] !== ' ' && upperCase[i] !== '-') {
      title += upperCase[i].toLowerCase();
    } else if (upperCase[i] === ' ') {
      title += ' ';
      title += upperCase[i + 1];
      i++;
    } else if (upperCase[i] === '-') {
      title += upperCase[i];
      title += upperCase[i + 1];
      i++;
    }
  }
  return alterWords(title);
}

function semiColon(title) {
  var newString = '';
  newString += title[0].toUpperCase();
  for (var i = 1; i < title.length; i++) {
    if (title[i] === ':') {
      newString += title[i];
      newString += ' ';
      newString += title[i + 2].toUpperCase();
      i += 2;
    } else {
      newString += title[i];
    }
  }
  title = newString;
  return title;
}

function alterWords(title) {
  var newString = '';
  var split = title.split(' ');
  for (var i = 0; i < split.length; i++) {
    for (var x = 0; x < uniqueWords.length; x++) {
      if (split[i].toLowerCase() === uniqueWords[x] && split[i].toLowerCase() !== uniqueWords[16] && split[i].toLowerCase() !== uniqueWords[17]) {
        newString += split[i].toLowerCase();
        newString += ' ';
        i++;
      } else if (split[i].toLowerCase() === uniqueWords[16] || split[i].toLowerCase() === uniqueWords[16] + ':') {
        newString += 'JavaScript';
        if (split[i].toLowerCase() === uniqueWords[16] + ':') {
          newString += ':';
        }
        if (i !== split.length - 1) {
          newString += ' ';
        }
        i++;
      } else if (split[i].toLowerCase() === uniqueWords[17]) {
        newString += uniqueWords[17].toUpperCase();
        if (i !== split.length - 1) {
          newString += ' ';
        }
        i++;
        break;
      }
    }
    if (split[i] !== undefined) {
      newString += split[i];
    }
    if (i < split.length - 1) {
      newString += ' ';
    }
  }
  title = newString;
  return semiColon(title);
}
