const fs = require('fs');
const axios = require('axios');
const { convert } = require('html-to-text');

// =====================================================
// function cat(), runs with command line argument and without
// =====================================================

const argv = process.argv;
const argvPath = argv[2];
const argvPath2 = argvPath;

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
try {
    argvPath.startsWith('http') ? webCat(argvPath) : cat(argvPath2)
} catch(error) {
    return false;
}