//프로그래머스
//짝수는 싫어요

//첫 시도한 코드
function solution(n) {
    // 조건 1. 정수의 홀수를 추출하고(비교연산) 조건 2. 정수를 배열로 변경 후 오름차순으로((배열로 변경: push메서드, 오름차순...sort?) return)
    
    //빈 배열 선언
    var answer = [];
    for( i = 0; i <= n; i++) {
        if ( i % 2 === 1) {
            answer.push(i);
        }
        answer.sort((a,b) => a - b);
    }
    return answer;
}

//두번쨰시도. sort함수를 굳이 집어넣을 필요가 없었음
function solution(n) {
    // 조건 1. 정수의 홀수를 추출하고(비교연산) 조건 2. 정수를 배열로 변경 후 오름차순으로((배열로 변경: push메서드, 오름차순...sort?) return)
    //빈 배열 선언
    var answer = [];
    for( i = 0; i <= n; i++) {
        if ( i % 2 === 1) {
            answer.push(i);
        }
    }
    return answer;
}
