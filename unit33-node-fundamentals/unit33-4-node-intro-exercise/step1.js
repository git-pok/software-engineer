const fs = require('fs')
// console.log(fs)

// =====================================================
// function cat(), doesn't run with command line argument
// =====================================================
function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        error ? console.log('cat() Error:', error) && process.exit(1) : console.log('File Contents:', data) 
    })
}

// =====================================================
// Test cat(path)
// =====================================================
// cat('one.txt');
// cat('one.tx');

// =====================================================
// function catArgv(), runs with command line argument
// =====================================================

const argv = process.argv;
const argvPath = argv[2];

function catArgv(argvPath) {
    fs.readFile(argvPath, 'utf8', (error, data) => {
        if (error) {
            console.log(`catArgv() Error: ${error.path} is an invalid file path!`);
            process.exit(1);
        } else {
            console.log('File Contents:', data);   
        } 
    })
}

// =====================================================
// Test catArgv(argvPath)
// =====================================================
// catArgv(argvPath);