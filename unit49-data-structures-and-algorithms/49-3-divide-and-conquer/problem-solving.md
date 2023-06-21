# Problem Solving - Divide and Conquer
In this exercise, you’ll utilize problem solving patterns to solve the following code challenges:

## countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:
Time Complexity: O(log N)

Examples:
```
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
```

Solution One:
```
function countZeros(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = leftIdx + (Math.floor((rightIdx - leftIdx) / 2));
    let totalZeros = 0;
    const arrLen = arr.length;
    const whileBreak = arr.length + 1;
    while ( leftIdx <= rightIdx ) {
        if (arr[arrLen - 1] === 1) {
            leftIdx = whileBreak;
            return -1;
        } else if (arr[middleIdx] === 1 && arr[middleIdx + 1] === 1) {
            leftIdx = middleIdx;
            middleIdx = leftIdx + (Math.floor((rightIdx - leftIdx) / 2));
        } else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 1) {
            totalZeros = arrLen - middleIdx;
            leftIdx = whileBreak;
        } else if (arr[middleIdx] === 1 && arr[middleIdx + 1] === 0) {
            totalZeros = arrLen - (middleIdx + 1);
            leftIdx = whileBreak;
        } else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 0) {
            rightIdx = rightIdx - 1;
            middleIdx = middleIdx - 1;
        } else if (arr[0] === 0) {
            totalZeros = arrLen;
            leftIdx = whileBreak;
        } else {
            leftIdx = whileBreak;
            return -1;
        }
    }
    return totalZeros;
}
```
Solution Two:
```
function countZeros(arr) {
    let firstVal = 0;
    let secondVal = 1;
    const arrLen = arr.length - 1;
    while ( firstVal <=  arrLen) {
        if (arr[firstVal] === 1 && arr[secondVal] === 0) {
            totalZeros = arr.length - secondVal;
            firstVal = arrLen + 1;
        } else if (arr[firstVal] === 1 && arr[secondVal] === 1) {
            firstVal = firstVal + 1;
            secondVal = secondVal + 1;
        } else if (arr[firstVal] === 0 && arr[secondVal] === 0) {
            totalZeros = arr.length;
            firstVal = arrLen + 1;
        } else if (arr[arr.length - 1] === 1) {
            return -1;
        }
    }
    return totalZeros;
}
```

## sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:
Time Complexity: O(log N)

Examples:
```
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
```

Solution:
```
function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = Math.floor((rightIdx - leftIdx) / 2);
    let valMidLeftIdx = middleIdx;
    let valMidRightIdx = valMidLeftIdx + 1;
    let totalFreq = 0;
    let binaryStatus = false;

    while ( !binaryStatus ) {
        if (arr[valMidLeftIdx] === val) {
            valMidLeftIdx = valMidLeftIdx;
            valMidRightIdx = valMidLeftIdx + 1;
            binaryStatus = true;
        } else if ( leftIdx === arr.length || rightIdx === -1 ) {
            binaryStatus = true;
        } else if (arr[valMidLeftIdx] < val) {
            leftIdx = middleIdx + 1;
            middleIdx = leftIdx + (Math.floor((rightIdx - leftIdx) / 2));
            valMidLeftIdx = middleIdx;
            valMidRightIdx = valMidLeftIdx + 1;
        } else if (arr[valMidLeftIdx] > val) {
            rightIdx = middleIdx - 1;
            middleIdx = leftIdx + (Math.floor((rightIdx - leftIdx) / 2));
            valMidLeftIdx = middleIdx;
            valMidRightIdx = valMidLeftIdx + 1;
        }
    }

    while ( binaryStatus ) {
        if (arr[valMidLeftIdx] === val) {
            totalFreq++;
            valMidLeftIdx--;
        } else if (arr[valMidRightIdx] === val) {
            totalFreq++;
            valMidRightIdx++;
        } else if (
            arr[valMidLeftIdx] !== val
            && arr[valMidRightIdx] !== val
            && totalFreq > 0
            ) {
                break;
        } else if (
            arr[valMidLeftIdx] !== val
            && arr[valMidRightIdx] !== val
            && totalFreq === 0
            )  {
                totalFreq = -1;
                break;
        }
    }
    return totalFreq;
}
```

## findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:
Time Complexity: O(log N)

Examples:
```
findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
```

Solution:
function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let midIdx = Math.floor((rightIdx - leftIdx)/2);
    let leftPivIdx = 0;
    let rightPivIdx = arr.length - 1;
    let binaryStatus = false;
    let foundVal = null;
    while (foundVal === null) {
        if ( arr[midIdx] === val ) {
            foundVal = midIdx;
            return foundVal;
        } else if ( leftIdx === rightIdx && leftIdx === midIdx ) {
            foundVal = -1;
            return foundVal;
        } else if ( rightIdx > arr.length ) {
            foundVal = -1;
            return foundVal;
        } else if ( val < arr[midIdx] && val > arr[rightPivIdx] ) {
            rightIdx = midIdx - 1;
            midIdx = leftIdx + (Math.floor((rightIdx - leftIdx)/2));
        } else if ( val > arr[midIdx] && val > arr[rightPivIdx] ) {
            leftIdx = midIdx;
            rightIdx = rightIdx + 1;
            midIdx = leftIdx + (Math.floor((rightIdx - leftIdx)/2));
        } else if ( val < arr[midIdx] && val < arr[leftPivIdx] && arr[midIdx] > arr[rightPivIdx]) {
            leftIdx = midIdx + 1;
            midIdx = leftIdx + (Math.floor((rightIdx - leftIdx)/2));
        } else if ( val < arr[midIdx] && val < arr[leftPivIdx] && arr[midIdx] <= arr[rightPivIdx]) {
            rightIdx = midIdx;
            leftIdx = midIdx - 2;
            midIdx = leftIdx + (Math.floor((rightIdx - leftIdx)/2));
        } else if ( val > arr[midIdx] && val < arr[leftPivIdx] && arr[midIdx] < arr[leftPivIdx] ) {
            leftIdx = midIdx + 1;
            midIdx = leftIdx + (Math.floor((rightIdx - leftIdx)/2));
        }
    }
}

## findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:
Time Complexity: O(log N)

Examples:
```
findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
```

## findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:
```
findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
```

Constraints
Time Complexity: O(log N)