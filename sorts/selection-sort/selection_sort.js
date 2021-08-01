const inputs = [14,3,19,2,99,11,1,10,12,6,4,13,9,17,15,8,20,7,5,18,16,21];

const sort = () => {

    for(let i=0; i<inputs.length; ++i){
        let _min = Number.MAX_VALUE;
        let _minIdx = -1;
        
        for(let j=i; j<inputs.length; ++j){
            if(_min > inputs[j]){
                _min = inputs[j];
                _minIdx = j;

            }
        }
        swap(i, _minIdx);
    }
            
}

const swap = (a, b) => {
    const temp = inputs[b];
    inputs[b] = inputs[a];
    inputs[a] = temp;
}


const selectionSort = () => {
    sort();
}

selectionSort();