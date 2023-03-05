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
    // console.log('HDGDGDGDGDGDGDGDGDGDGDGDG', typeof text)

    url && resp ? console.log(text) : false

    return text;
    
}

// console.log(argvPath.startsWith('http'))
// console.log(argvPath)
// argvPath.startsWith('http') ? webCat(argvPath) : catArgv(argvPath2)

// =====================================================
// New function webCat()
// =====================================================

async function outputToFile(argv) {
    // console.log(argvPath);
    const fileToWriteTo = argv[3];
    let contentArgv = argv[4]; 
    let content;

    if (contentArgv.endsWith('.txt')) {
        contentFromFile = await fs.readFileSync(contentArgv, 'utf8');
        content = contentFromFile; 
    } else if (contentArgv.startsWith('http')) {
        contentFromFile = await webCat(contentArgv);
        // console.log('HDGDGDGDGDGDGHDGDGDGDGDGDGDGDGDG', typeof contentFromFile)
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

if (argvPath.startsWith('http')) {
    // console.log('SWITCH http!', argvPath);
    webCat(argvPath);
} else if (argvPath.startsWith('--out')) {
    // console.log('SWITCH --out!', argvPath);
    outputToFile(argv);
} else {
    // console.log('File!', argvPath);
    catArgv(argvPath2);
}

// switch (argvPath) {
//     case argvPath.startsWith('http'):
//         webCat(argvPath);
//         break;
//     case (argvPath.startsWith('--out')):
//         code = outputToFile(argv);
//         // outputToFile(argv)
//         // console.log('SWITCH --out!');
//         break;
//     default:
//         catArgv(argvPath2);
// }