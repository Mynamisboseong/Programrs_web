//프로그래머스
//짝수홀수개수

//성공 1.
// 'num_list' 리스트를 for문으로 반복시켜 0번인덱스부터 끝까지 if문으로 비교한다.
// 해당 값 들을 홀수, 짝수로 나누어서 카운팅하고 'answer'배열에 집어 넣는다.
function solution(num_list) {
    var answer = [];
    var even_count = 0;
    var add_count = 0;
    
    for(i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            even_count++;
        } else {
            add_count++;
        }
    }
    answer.push(even_count,add_count);
    return answer;
}