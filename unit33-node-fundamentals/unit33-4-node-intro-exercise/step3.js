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
    
    return text;
}

// =====================================================
// New function outputToFile()
// =====================================================

async function outputToFile(argv) {
    const fileToWriteTo = argv[3];
    let contentArgv = argv[4]; 
    let content;

    if (contentArgv.endsWith('.txt')) {
        contentFromFile = await fs.readFileSync(contentArgv, 'utf8');
        content = contentFromFile; 
    } else if (contentArgv.startsWith('http')) {
        contentFromFile = await webCat(contentArgv);
        content = contentFromFile;
    } else {
        content = contentArgv;
    }
    
    fs.appendFile(fileToWriteTo, content, 'utf8', (error, data) => {
        if (error) {
            console.log(`Error reading ${argvPath}!\n${error}`);
            process.exit(1);
        } else {
            console.log('File successfully created!');   
        } 
    });
}


try {
    if (argvPath.startsWith('http')) {
        webCat(argvPath);
    } else if (argvPath.startsWith('--out')) {
        outputToFile(argv);
    } else {
        cat(argvPath2);
    }
} catch {
    return false;
}