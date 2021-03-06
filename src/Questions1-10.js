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
  array.splice(0,3);
  return array;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
   return array.sort(compareLastLetter);
 };

function compareLastLetter(a, b) {
  if (a[a.length - 1] > b[b.length - 1])
    return 1;
  else if (a[a.length - 1] < b[b.length - 1])
    return -1;
  return 0;
};

// Question 9

function returnFirstHalfOfString(string) {
  halfLength = Math.ceil(string.length / 2)
  return string.split('').splice(0, halfLength).join("")
};

// Question 10

function makeNumberNegative(number) {
  if (number > 0) {
    return number * -1;
  } else {
    return number; 
  }
};
