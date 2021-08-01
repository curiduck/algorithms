const { getInputs, swap } = require('../_common/common');

const inputs = getInputs();

const selectionSort = () => {

    for(let i=0; i<inputs.length; ++i){
        let _min = Number.MAX_VALUE;
        let _minIdx = -1;
        
        for(let j=i; j<inputs.length; ++j){
            if(_min > inputs[j]){
                _min = inputs[j];
                _minIdx = j;

            }
        }
        swap(inputs, i, _minIdx);
    }
            
}

selectionSort();


