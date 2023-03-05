const fs = require('fs')
// console.log(fs)

// =====================================================
// function cat(), runs with command line argument and without
// =====================================================

const argv = process.argv;
const argvPath = argv[2];

function cat(argvPath) {
    fs.readFile(argvPath, 'utf8', (error, data) => {
        if (error) {
            console.log(`Error reading ${argvPath}!\n${error}!`);
            process.exit(1);
        } else {
            console.log('File Contents:', data);   
        } 
    })
}

argvPath ? cat(argvPath) : false 


// =====================================================
// Test cat(argvPath) in from file
// =====================================================
// cat('one.txt');