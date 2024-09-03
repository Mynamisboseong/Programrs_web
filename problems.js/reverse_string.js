function solution(my_string){
    const answer = [];
    for(var i = 0; i < my_string.length; i++) {
        answer.push(my_string[i])
    }

    let result_string = '';
    while(answer.length > 0) {
        result_string += answer.pop();
    }
    return result_string;
}

// 스프레드 연산자와 reverse, join 이용
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
 }

 // split 이용
 function solution(my_string) {
    return my_string.split('').reverse().join('');
}