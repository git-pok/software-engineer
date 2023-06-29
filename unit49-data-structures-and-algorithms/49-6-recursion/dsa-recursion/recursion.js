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

function gatherStrings(obj, i = 0) {
  debugger;
  const arrayKeys = Object.keys(obj);
    const arrayKeysIdx = arrayKeys[0] !== "strings" ? arrayKeys[0] : arrayKeys[1];
    if ( arrayKeys.length === 1 && arrayKeys[0] === "strings" || arrayKeys.length === 0 ) {
        return obj.strings || "No string values!";
    } else if (arrayKeysIdx !== "strings" && typeof obj[arrayKeysIdx] === "object") {
        if (Object.keys(obj[arrayKeysIdx]).length === 0) {
            delete obj[arrayKeysIdx]
            gatherStrings(obj);
        } else if (arrayKeys.length !== 1 && arrayKeysIdx !== "strings") {
            for (let val in obj[arrayKeysIdx]) {
                if (typeof obj[arrayKeysIdx][val] === "string") {
                    obj.strings = obj.strings ? [...obj.strings, obj[arrayKeysIdx][val] ] : obj[arrayKeysIdx][val]
                    delete obj[arrayKeysIdx][val]
                    gatherStrings(obj);
                } else if (typeof obj[arrayKeysIdx][val] === "object") {
                    obj[val] = obj[arrayKeysIdx][val];
                    delete obj[arrayKeysIdx][val];
                    gatherStrings(obj);
                } else if (typeof obj[arrayKeysIdx][val] !== "string") {
                    delete obj[arrayKeysIdx][val];
                    gatherStrings(obj);
                    obj[arrayKeysIdx][val]
                }
            }
        }
    } else if (arrayKeysIdx !== "strings" && typeof obj[arrayKeysIdx] !== "string" && typeof obj[arrayKeysIdx] !== "object") {
        delete obj[arrayKeysIdx];
        gatherStrings(obj);
    } else {
        obj.strings = obj.strings ? [...obj.strings, obj[arrayKeysIdx] ] : [ obj[arrayKeysIdx] ]
        delete obj[arrayKeysIdx]
        gatherStrings(obj);
    }
    // return obj.strings || "No string values!";
}

function gatherStrings(obj, i = 0) {
  debugger;
  // const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);
          for (let val of arrayValues) {
              if (typeof val === "string") {
                  // obj.strings = obj.strings ? [...obj.strings, obj[val] ] : obj[val]
                  obj.strings = obj.strings ? [...obj.strings, val ] : [val]
                  // delete obj[val];
                  // gatherStrings(obj);
              } else if (typeof val === "object") {
                  // obj[val] = obj[arrayKeysIdx][val];
                  // delete obj[arrayKeysIdx][val];
                  gatherStrings(val);
              }
          }
  return obj.strings || "No string values!";
}

function gatherStrings(obj, nstdObj = null) {
  debugger;
  const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);
      if (nstdObj) {
          for (let val in nstdObj) {
              if (typeof nstdObj[val] === "string") {
                  // obj.strings = obj.strings ? [...obj.strings, obj[val] ] : obj[val]
                  obj.strings = obj.strings ? [...obj.strings, nstdObj[val] ] : [nstdObj[val]]
                  // delete obj[val];
                  // gatherStrings(obj);
              } else if (typeof nstdObj[val] === "object") {
                  // obj.val = obj[val];
                  // delete obj[val];
                  gatherStrings(obj, nstdObj[val]);
              }
          }
      } else {
          for (let val in obj) {
              if (typeof obj[val] === "string") {
                  // obj.strings = obj.strings ? [...obj.strings, obj[val] ] : obj[val]
                  obj.strings = obj.strings ? [...obj.strings, obj[val] ] : [obj[val]]
                  // delete obj[val];
                  // gatherStrings(obj);
              } else if (typeof obj[val] === "object") {
                  // obj.val = obj[val];
                  // delete obj[val];
                  gatherStrings(obj, obj[val]);
              }
          }
      }
  return obj.strings || "No string values!";
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
