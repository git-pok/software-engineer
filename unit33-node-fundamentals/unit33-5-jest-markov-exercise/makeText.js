/** Command-line tool to generate Markov text. */
const fs = require("fs");
const { MarkovMachine: markov } = require("./markov");
const axios = require("axios");
const process = require("process");
const { convert } = require('html-to-text');

/** Make Markov machine from text and generate text from it. */
// let mm = new markov("MARKOV SAMPLE TEXT. WENT TO THE STORE. HELLO THERE!");
// console.log(mm.makeText());

function generateText(text) {
    let mm = new markov(text);
    console.log(mm.makeText());
}
  
  
/** read file and generate text from it. */
  
function makeText(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if (err) {
            console.log(`Cannot read file: ${path}:\n${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}
  
  
/** read URL and make text from it. */
   
async function makeURLText(url) {
    let resp;
  
    try {
        resp = await axios.get(url);
        resp = resp.data;
    } catch (err) {
        console.log(`Cannot read URL: ${url}: \n${err}`);
        process.exit(1);
    }

    const html = resp;
    const text = convert(html);
    generateText(text);
}
  
  
/** interpret cmdline to decide what to do. */
let [ method ] = process.argv.slice(2);
let [ content ] = process.argv.slice(3); 
if (!method) method = 'false: no method specified.';
else if (!content) content = 'false: no content.'
  
if (method === 'file') {
    makeText(content);
} else if (method === 'url') {
    makeURLText(content);
} else {
    console.log(`Unknown method: ${method}`);
    process.exit(1);
}

