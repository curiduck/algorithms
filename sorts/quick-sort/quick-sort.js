const { getInputs, swap } = require('../_common/common');

const inputs = getInputs();


const partitioning = (left, right) => {

    // 중간값을 left와 변경해줌으로써 성능 향상
    const mid = parseInt((left + right) / 2);
    swap(inputs, mid, left);

    // 맨 왼쪽에 있는 요소를 피벗으로 설정
    const pivot = inputs[left];

    let lPoint = left;
    let rPoint = right;


    // 왼쪽 포인터가 오른쪽 포인터를 만날때까지 진행한다.
    while(lPoint < rPoint){
        // 오른쪽 포인터 값이 피벗보다 클때만 왼쪽으로 이동
        while(inputs[rPoint] > pivot) rPoint--;
        // 왼쪽 포인터 값이 피벗보다 작을때만 오른으로 이동. 
        // 만약 왼쪽 포인터가 오른쪽 포인터를 만나면 빠져나온다.
        while((lPoint < rPoint) && inputs[lPoint] <= pivot) lPoint++; 
        // 자리 바꾸기
       swap(inputs, lPoint, rPoint);
    }

    // 왼쪽 포인터와 오른쪽 포인터가 만난 곳을 피벗과 자리를 바꾼다.
    swap(inputs, lPoint, left);

    return rPoint;

}

const quickSort = (left, right) => {
    // 오른쪽 포인터가 왼쪽보다 클때만 진행.
    if(left >= right) return;
    const pivot = partitioning(left, right);
    quickSort(left, pivot-1);
    quickSort(pivot+1, right);
}

quickSort(0, inputs.length-1);


/**
 * 참고 사이트 : https://gyoogle.dev/blog/algorithm/Quick%20Sort.html
 */
