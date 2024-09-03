//프로그래머스 코딩테스트 입문
//편지
function solution(message) {
    array_lange = [...message];
    return array_lange.length * 2;
}

//더 간결한 방법...
function solution(message) {
    return message.length * 2;
}