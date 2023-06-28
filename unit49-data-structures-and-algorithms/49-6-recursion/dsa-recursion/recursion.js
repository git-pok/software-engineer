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

function isPalindrome(str, i = 0) {
  str = str.replaceAll(/\W/ig, "").replaceAll(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, "").replaceAll(/\s{1,}/g, "").toLowerCase();
  if (i === str.length - 1) return true;
  else if (str[i] === str[str.length - 1 - i]) return isPalindrome(str, i + 1);
  else if (str[i] !== str[str.length - 1 - i]) return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  else if (arr[i] === val) return i;
  else return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  if (i === str.length) return "";
  return revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */
// Better Big O Time Complexity Solution.
function gatherStrings(obj, i = 0) {
    const arrayKeys = Object.keys(obj);
    if ( arrayKeys.length === 1 || arrayKeys.length === 0 ) return;
    if (typeof obj[arrayKeys[0]] !== "string") {
        delete obj[arrayKeys[0]];
        gatherStrings(obj);
    } else {
        obj.strings = obj.strings ? [...obj.strings, obj[arrayKeys[0]] ] : [ obj[arrayKeys[0]] ]
        delete obj[arrayKeys[0]]
        gatherStrings(obj);
    }
    return obj.strings || "No string values!";
}

// Worser Big O Time Complexity Solution.
function gatherStringsII(obj, i = 0) {
  const arrayKeys = Object.keys(obj);
  if ( i === arrayKeys.length ) return;
  if (typeof obj[arrayKeys[i]] !== "string") {
    delete obj[arrayKeys[i]];
    gatherStrings(obj, i);
  } else {
    gatherStrings(obj, i + 1);
  }
  return Object.values(obj);
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
