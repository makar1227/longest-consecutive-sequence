module.exports =
function longestConsecutiveLength(array) {
    array = array.sort((a, b) => a - b);
    let count = 1;
    let tempCount = 0;
    if (array.length < 2) {
        return array.length;
    }
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] == (array[i + 1] - 1)) {
            count++;
        }
        else if(array[i] == (array[i + 1])){
            continue;
        }
        else {
            if (count > tempCount) {
                tempCount = count;
            }
            count = 1;
        }
    }
    return tempCount;
}
