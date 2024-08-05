function solution(n, t) {
    // 한 시간에 두배... 시간이 T고..그럼 시간을 T * 2 가 아니라 T의 제곱? 
    //     T의 제곱이아니라  1T 당 N * 2?인거지 
    for(i = 0; i <= t; i++) {
        n = n * 2;
    }
    return n;
}

//성공. 반복문의 조건설정을 잘못한 케이스
function solution(n, t) {
    for(i = 0; i < t; i++) {
        n = n * 2;
    }
    return n;
}