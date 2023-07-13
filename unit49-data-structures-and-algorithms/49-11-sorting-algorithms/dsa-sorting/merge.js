function merge(arr1, arr2) {
    let arr1Ptr = 0;
    let arr2Ptr = 0;
    const mergedArr = [];

    while (arr1Ptr < arr1.length && arr2Ptr < arr2.length) {
        if (arr1[arr1Ptr] < arr2[arr2Ptr]) {
            mergedArr.push(arr1[arr1Ptr]);
            arr1Ptr++;
        } else {
            mergedArr.push(arr2[arr2Ptr]);
            arr2Ptr++;
        }
    }

    while (arr1Ptr < arr1.length) {
        mergedArr.push(arr1[arr1Ptr]);
        arr1Ptr++;
    }

    while (arr2Ptr < arr2.length) {
        mergedArr.push(arr2[arr2Ptr]);
        arr2Ptr++;
    }

    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};