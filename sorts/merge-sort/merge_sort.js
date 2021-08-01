 const inputs = [14,3,19,2,99,11,1,10,12,6,4,13,9,17,15,8,20,7,5,18,16,21];
//const inputs = [...Array(21).keys()].map(i=>i+1);
const sortedArr = [];

/** 분할 함수 */
const partitioning = (start, end) => {

    // 만약 시작점이 종료지점보다 같거나 크다면 1개 이하로 분할된 경우이므로 종료
    if(start >= end) return;

    
    const len = start+end;
    // 분할할 중간지점 설정
    const mid = parseInt(len / 2);

    partitioning(start, mid);
    partitioning(mid+1, end);

    //분할 되었으면 합병
    mergeAndSort(start, mid, end);

}


const mergeAndSort = (start, mid, end) => {
    
    // firstPartIdx, secondPartIdx : 첫번째 배열과 두번째 배열을 동시에 탐색하기 위한 임시변수
    // sortedArrIdx : 임시 배열에 값을 지정하기 위한 임시 인덱스 변수
    let firstPartIdx=start, secondPartIdx=mid+1, sortedArrIdx=start;

    // firstPartIdx와 secondPartIdx가 끝에 도달하지 않은 경우
    while(firstPartIdx <= mid && secondPartIdx <= end)
        // 임시 변수를 하나씩 전진시키며 정렬된 배열에 값 채워넣기
        // 두 값을 비교했을때 작은게 먼저 들어가게 되어있다.
        // 내림차순으로 변경하려면 이 비교문을 변경해야한다.
        const biggerOneIdx = inputs[firstPartIdx] <= inputs[secondPartIdx] 
        ? firstPartIdx++ : secondPartIdx++;

        sortedArr[sortedArrIdx++] = inputs[biggerOneIdx];

    // 남은값 마저 밀어넣기
    // 만약 첫번째 배열이 모두 탐색을 마친 상태라면 두번째 배열을 끝까지 탐색.
    // 아니면 첫번째 배열을 끝까지 탐색.
    if(firstPartIdx > mid) while(secondPartIdx <= end) sortedArr[sortedArrIdx++] = inputs[secondPartIdx++];
    else while(firstPartIdx <= mid) sortedArr[sortedArrIdx++] = inputs[firstPartIdx++];

    //원래 배열을 초기화 시켜준다.
   for(let tempIdx=start; tempIdx<=end; ++tempIdx) inputs[tempIdx] = sortedArr[tempIdx];
}


const mergeSort = () => {
    console.log(inputs);
    partitioning(0, inputs.length-1);
    console.log(inputs);
}

mergeSort();


