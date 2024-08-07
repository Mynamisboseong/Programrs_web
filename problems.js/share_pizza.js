//프로그래머스
//피자나눠먹기


//명령형 프로그래밍, 첫 번째 풀이
function solution(n) {
    var result = 0;
    for (var i = 0; i <= n; i++) {
        if(7 * i >= n){
            result = i;
            break;
        } 
    }
    return result
}

//선언형 프로그래밍, 두 번째 풀이
const solution = n => 
    [...Array(n + 1).keys()].find(i => 7 * i >= n);