// add whatever parameters you deem necessary

function constructNote(message, letters) {
    const messageFreqs = new Map();
    const lettersFreqs = new Map();

    for (let val of message) {
        messageFreqs.set(val, (messageFreqs.get(val)+1 || 1))
    }

    for (let val of letters) {
        lettersFreqs.set(val, (lettersFreqs.get(val)+1 || 1))
    }

    for (let char of messageFreqs.keys()) {
        if (!lettersFreqs.get(char) || (messageFreqs.get(char) > lettersFreqs.get(char))) return false;
    }

    return true;
}

// function constructNote(message, letters) {
//     const lettersFreqs = freqCounter(letters);

//     for (let char of message) {
//         let charFreq = lettersFreqs.get(char);
//         if (charFreq > 0) {
//             lettersFreqs.set(char, charFreq-1);
//         } else return false;
//     }

//     return true;
// }

// function freqCounter(string) {
//     let freqs = new Map();

//     for (let val of string) {
//         let count = freqs.get(val) || 0;
//         freqs.set(val, count+1);
//     }

//     return freqs;
// }

module.exports = {
    constructNote
}