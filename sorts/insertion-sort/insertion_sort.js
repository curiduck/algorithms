const { getInputs } = require('../_common/common');

const inputs = getInputs();

const insertionSort = () => {
    const len = inputs.length;
    let i, j = 0;
    for(i=1; i<len; ++i){
        const key = inputs[i];
        for(j=i-1; j>=0; j--){
            if(inputs[j] > key) inputs[j+1] = inputs[j];
            else break;
        }
        inputs[j+1] = key;
    }   
}

insertionSort();

