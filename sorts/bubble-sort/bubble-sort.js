const { getInputs, swap } = require('../_common/common');

const inputs = getInputs();

const bubbleSort = () => {
    for (let i = 0; i < inputs.length; ++i)
        for (let j = 0; j < inputs.length; ++j)
            if (inputs[i] < inputs[j]) swap(inputs, i, j)
}

bubbleSort();

