// add whatever parameters you deem necessary
function countPairs(arr, numb) {
    const freqs = new Map();
    let pairs = 0;

    for (let val of arr) {
        freqs.set(val, (freqs.get(val) + 1) || 1);
    }

    for (let val of freqs.keys()) {
        if (val*2 === numb) continue;
        let compliment = numb-val;
        if (freqs.get(compliment)) {
            pairs ++;
            freqs.delete(val);
            freqs.delete(compliment);
        }
    }

    return pairs;
}

module.exports = {
    countPairs
};