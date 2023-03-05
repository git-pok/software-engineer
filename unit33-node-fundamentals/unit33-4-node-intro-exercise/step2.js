const fs = require('fs');
const axios = require('axios');
const { convert } = require('html-to-text');

// =====================================================
// function cat(), doesn't run with command line argument
// =====================================================
function cat(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        error ? console.log(`Error reading ${path}!\n${error}`) && process.exit(1) : console.log('File Contents:', data) 
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
const argvPath2 = argvPath;

function catArgv(argvPath) {
    fs.readFile(argvPath, 'utf8', (error, data) => {
        if (error) {
            console.log(`Error reading ${argvPath}!\n${error}`);
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

// =====================================================
// New function webCat()
// =====================================================

async function webCat(url) {
    try {
        resp = await axios.get(url)
    } catch(error) {
        console.log(`Error fetching ${url}! \n${error}`)
        return false;
    }

    const html = resp.data; 
    const text = convert(html);

    url && resp ? console.log(text) : false
    
}

// console.log(argvPath.startsWith('http'))
// console.log(argvPath)
argvPath.startsWith('http') ? webCat(argvPath) : catArgv(argvPath2)