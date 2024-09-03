//프로그래머스 코딩테스트 입문 100제
//양꼬치

//실패 1
function solution(n, k) {
    lamb = 12000 * n;
    drink = 2000 * k;
    result = lamb + drink;
    drink_count = Math.floor(n / 10);
    
    if(drink_count > 0) {
        k - drink_count;
    }
    return result;
}

//성공
function solution(n, k) {
    drink_service = k - Math.floor(n/10);
  return n * 12000 + (drink_service * 2000); 
}

