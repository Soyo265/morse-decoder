const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

let alphabet = {};
function createAlphabet() {
  for (let key in MORSE_TABLE) {
    let binaryKey = key
        .replace(/\./g, '10')
        .replace(/-/g, '11');
    while (binaryKey.length < 10) {
      binaryKey = '0' + binaryKey;
    }
    alphabet[binaryKey] = MORSE_TABLE[key];
  }
  alphabet['**********'] = ' ';
}

function decode(expr) {
  createAlphabet();
  let letters = [];
  let result = '';

  for (let i = 10; i <= expr.length; i += 10) {
    letters.push(expr.slice(i - 10, i));
  }

  letters.map(val => {
    if (alphabet.hasOwnProperty(val)) {
      result += alphabet[val];
    }
  });

  return result;
}

module.exports = {
    decode
}