// Turns a string into an array of individual values.
// ['1, 2, 3'] => ['1,', '2,', '3']
// ['10, '20'] => ['10,', '20']
function split(...numbers) {
    let newArr;
    newArr = numbers[0].split(' ');
    return newArr;
};


// Turns a string of numbers into an array of numbers.
// Deletes the string commas also.
function turnStrToNumsArr(str) {
    newArr = split(str); 
    let numsArr = [];

    for (let i = 0; i < newArr.length; i++) {
        numsArr.push(+newArr[i].replaceAll(',', ''));   
    }

    return numsArr;
};


// Calculates the mean.
function mean(...numbers) {
    numbers = turnStrToNumsArr(numbers[0]);
    result = +numbers.reduce((val, nextVal) => val + nextVal); 
    return result / numbers.length;
};


// Verifies no letters exist in numbers.
function isLetter(...numbers) {
    numbers = numbers[0].split('');

    const chars = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    return numbers.some((val)=> chars.indexOf(val) !== -1);
};


// Calculates the median.
function median(...numbers) {
    numbers = turnStrToNumsArr(numbers[0]);
    sortedArr = numbers.sort(function(a, b){return a-b});
    length = numbers.length
    midpoint = Math.floor(length / 2);
    if (length % 2 !== 0) return +sortedArr[midpoint];
    else return (+sortedArr[midpoint -1] + +sortedArr[midpoint]) / 2;    
};


// Calculates the mode.
function mode(...numbers) {
    const modeArr = [];
    numbers = turnStrToNumsArr(numbers[0]);
    sortedArr = numbers.sort(function(a, b){return a-b});

    const result = new Map();

    for (let num of sortedArr) { 
        if (!result.has(num)) result.set(num, 1);
        else result.set(num, result.get(num) + 1);
    }

    values = result.values();

    max = Math.max(...values);

    result.forEach((val, num)=> {
        if (val === max) modeArr.push(num);
    });

    return modeArr.sort(function(a, b){return a-b});
};
  

module.exports = {
    mean,
    split,
    turnStrToNumsArr,
    isLetter,
    median,
    mode,
};