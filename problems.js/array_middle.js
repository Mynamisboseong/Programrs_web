//프로그래머스 코딩테스트 입문 100제
//중앙값 구하기

//처음에 해본거
function solution(array) {
    var middle = 0;
    array.sort();
    middle = array[(array.length / 2) + 1];
    return middle;
}

//sort와 math.floor를 썼지만 테스트케이스는 성공, 하지만 채점 결과 실패.
function solution(array) {
    array.sort();
    array_index = Math.floor(array.length / 2);
    return array[array_index];  
}

//sort()에 비교함수를 추가. 성공.
function solution(array) {
    array.sort((a,b) => a - b);
    array_index = Math.floor(array.length / 2);
    return array[array_index];  
}