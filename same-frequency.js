// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const int1Freqs = new Map();
    const int2Freqs = new Map();

    for (let digit of int1.toString()) {
        int1Freqs.set(digit, (int1Freqs.get(digit)+1 || 1));
    }

    for (let digit of int2.toString()) {
        int2Freqs.set(digit, (int2Freqs.get(digit)+1 || 1));
    }

    for (let digit of int1Freqs.keys()) {
        if (int1Freqs.get(digit) !== int2Freqs.get(digit)) return false;
    }

    return true;
}

module.exports = {
    sameFrequency
}