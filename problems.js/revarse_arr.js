//프로그래머스
//배열 뒤집기

//첫 번째 코드
function solution(num_list) {
    const answer = [];
    while(num_list.length > 0) {
        answer.push(num_list.pop())
    }
    return answer;
}

//선언형으로 변경한 코드
const solution = (num_list) => [...num_list].reverse();
