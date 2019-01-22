// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var evensArray = array.filter(number => (number % 2 == 0));
  var oddsArray = array.filter(number => (number % 2 != 0));
  return [evensArray, oddsArray]
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  return array.filter(isAPalindrome).length
};

function isAPalindrome(word) {
  return (word == word.split('').reverse().join(''));
}

// Question 13

function shortestWordInArray(array) {
  array.sort(shortestWord);
 return array[0];
};

function shortestWord(a,b) {
   return a.length - b.length;
}

// Question 14

function longestWordInArray(array) {
  array.sort(longestWord);
  return array[0];
};

function longestWord(a,b) {
  return b.length - a.length;
}
// Question 15

function arrayTotal(array) {
  return array.reduce((acc, cur) => acc + cur);
};

// Question 16

function doubleArray(array) {
 return array.concat(array);
};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {
  return {... array};
};

// Question 20

function getLettersInArrayOfWords(array) {

};
