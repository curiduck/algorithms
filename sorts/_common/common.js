const getInputs = () => [14,3,19,2,99,11,1,10,12,6,4,13,9,17,15,8,20,7,5,18,16,21];
const swap = (arr=[], i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = { getInputs, swap }
