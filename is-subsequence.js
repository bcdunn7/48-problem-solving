// add whatever parameters you deem necessary
function isSubsequence(sequence, string) {
    let pointer = 0;
    for (let char of string) {
        if (char === sequence[pointer]) {
            pointer++;
        }
        if (pointer === sequence.length) return true; 
    }
    return false;
}

module.exports = {
    isSubsequence
}