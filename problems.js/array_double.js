//프로그래머스 코딩테스트 연습 100제
//배열 두배 만들기
function solution(numbers) {
    var answer = [];
    for(i = 0; i < numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }
    return answer;
}