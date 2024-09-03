//프로그래머스 코딩테스트 입문
//배열의 유사도

// 테스트케이스1 실패
function solution(s1, s2) {
    count = 0;
    for(i = 0; i < s1.length; i++){
        if(s1[i] === s2[i]){
            count ++
        }
    }
    return count;
}