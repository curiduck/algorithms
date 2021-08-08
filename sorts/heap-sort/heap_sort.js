const { getInputs, swap } = require('../_common/common');

const inputs = getInputs();

// n은 배열의 크기, i는 root
const heapify = (n, i) => {
    let largest = i;
    let left = 2*i+1; // heap의 왼쪽
    let right = 2*i+2; // heap의 오른쪽

    // 최대힙을 만든다. 최소힙을 만드려면 이 부분의 비교조건을 반대로 설정할것.
    // 만약 left가 배열 크기보다 작거나, largest보다 크다면 root를 largest로 초기화
    if(left < n && inputs[left] < inputs[largest]) largest = left;
    // 만약 right 배열 크기보다 작거나, largest보다 크다면 root를 largest로 초기화
    if(right < n && inputs[right] < inputs[largest]) largest = right;

    // largest가 i인 경우는 root 이므로 넘어간다.
    // 만약 largest가 현재 root가 아닌 경우는 
    if(largest != i) {
        swap(inputs, i, largest);
        heapify(n, largest);
    }

}

const sort = () => {
    let n = inputs.length;

    // 힙을 만든다. n/2부터 시작하는 이유는 n을 기준으로 왼쪽, 오른쪽으로 자식 노드가 채택되기 때문.
    const _buildHeap = () => {
        for(let i=Math.floor(n/2)-1; i>=0; i--) heapify(n, i) ;
    }
    
    // 힙을 정렬하기 위해 노드를 하나씩 루트로 위치를 변경한다.
    const _extractHeap = () => {
        for(let i=n-1; i>0; --i){
            swap(inputs, 0, i);
            heapify(i, 0);
        }
    }

    _buildHeap();
    _extractHeap();
}

sort();


/**
 * 위의 코드는 아래 페이지를 참조하였음.
 * https://www.geeksforgeeks.org/heap-sort/
 */