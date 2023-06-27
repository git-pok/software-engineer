/** product: calculate the product of an array of numbers. */
function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length) return words[words.length - 1].length;
  let nxtWord = longest(words, i + 1);
  return words[i].length > nxtWord ? words[i].length : nxtWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (str.length % 2 === 0 && i === str.length) return "";
  else if (str.length % 2 !== 0 && i === str.length + 1) return "";
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
