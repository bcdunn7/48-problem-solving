// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const out = {};

    for (let i=0; i < keys.length; i++) {
        out[keys[i]] = values[i] || null;
    }

    return out;
}

module.exports = {
    twoArrayObject
}


// function twoArrayObject(keys, values) {
//     return keys.reduce((obj, cur, idx) => {
//       obj[cur] = idx < values.length ? values[idx] : null;
//       return obj;
//     }, {});
//   }