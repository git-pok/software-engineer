function bubbleSort(arr) {
    let count = 0;
    for (let val = 0; val < arr.length; val++) {
        let swapped = false;
        for (let valItr = 0; valItr < arr.length - val; valItr++) {
            // console.log(arr);
            console.log(arr[valItr], arr[valItr + 1]);
            count++;
            if (arr[valItr] > arr[valItr + 1]) {
                [arr[valItr + 1], arr[valItr]] = [arr[valItr], arr[valItr + 1]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    // console.log("TOTAL COUNT", count);
    return arr;
}

module.exports = bubbleSort;