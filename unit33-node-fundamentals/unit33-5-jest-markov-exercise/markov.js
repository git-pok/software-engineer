/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // 10 makes an array of the passed in text.
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  // makeChains() is used in constructor to set an instance map.
  makeChains() {
    let chains = new Map();
    let wordVal;
    let nextWord; 

    for (let word = 0; word < this.words.length; word+=1) {
      // 28 creates wordVal.
      wordVal = this.words[word];
      // 30 creates nextWord.
      nextWord = this.words[word + 1] || null;

      // 33 pushes nextWord into the array values in chains.
      if (chains.has(wordVal)) chains.get(wordVal).push(nextWord);
      // 35 creates keys with array values, for chains Map.
      else chains.set(wordVal, [nextWord]); 
    }
    // 38 creates chains Map for every MarkovMachine instance. 
    this.chains = chains;
  }

  // Keyword static makes randomKey accessible for
  // MarkovMachine logic, but not accessible for instances.
  static randomKey(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */
  // numWords = 100 allows this fucntion to run in the while loop,
  // without stopping after the first iteration. 
  makeText(numWords = 100) {
    // pick a random key to begin
    // 53 Extracts all the keys into an array.
    let keys = Array.from(this.chains.keys());
    // Extracts a random key from keys.
    // 56 selects a random key form keys.
    let key = MarkovMachine.randomKey(keys);
    // 58 selects a value from chains Map by accessing key.
    let valFromRandKey = this.chains.get(key)[0]; 
    let out = [];

    // produce markov chain until reaching termination word
    // Uses numWords to keep iterating.
    while (out.length < numWords && valFromRandKey !== null) {
      // Pushes key's value to out.
      out.push(valFromRandKey);
      // 67 Redefines key.
      key = MarkovMachine.randomKey(keys);
      // 69 Redefines valFromRandKey. 
      valFromRandKey = this.chains.get(key)[0];
    }
    // returns string from array, out.
    if (out.join(" ") !== "") return out.join(" ");
    else return "Try Again!";
    // return out.join(" ");
  }
}

module.exports = {
  MarkovMachine,
}
