// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let current = arr[left];
        if (current > 0) {
            left++;
        } else if (current < 0) {
            let temp = arr[right];
            arr[right] = current;
            arr[left] = temp;
            right--;
        }
    }   

    return arr;
}

module.exports = separatePositive;