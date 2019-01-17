// Question 1

function selectElementsStartingWithE(array) {
  results = array.filter(word => (word[0] == 'e'))
  return results;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  results = array.filter(word => word[0].match(/[aeiou]/));
  return results;
};

// Question 3

function removeNullsFromArray(array) {
 results = array.filter(isNotNull);
 return results;
};

function isNotNull(word) {
  return word != null;
}

// Question 4

function removeNullsAndFalseFromArray(array) {
  results = array.filter(isNotNull).filter(isNotFalse);
  return results
};

function isNotFalse(word) {
  return word != false;
}

// Question 5

function reverseEveryElementInArray(array) {
  return array.map(word => word.split("").reverse().join("")); 
};

// Question 6

function dropFirstThreeElements(array) {

};

// Question 7

function addElementToBeginningOfArray(array, element) {

};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {

};
