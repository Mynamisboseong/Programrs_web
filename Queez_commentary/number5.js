// // 다음 코드를 실행하면 숫자가 0부터 4까지 출력이 되지않고 undefined가 다섯번 출력이 됩니다 그 이유는 무엇일까요?
// const numbers = [0, 1, 2, 3, 4]

// for(var i = 0; i < numbers.length; i++) {
//     setTimeout(function(){
//         console.log(`[${i}] number ${numbers[i]} turn!`)
//     }, i * 1000)
// }

// // const를 사용해서 그런 것 아닌가? 했지만 아니었음.
// // setTimeout 이 실행되는 시점의 i는 function 안에 있는 i 가 아니다.. const numbers 에 있는 i 다.
// // 클로저 문제다. 실제로 setTimeout이 실행되는 시점의 i는 이미 for문이 다 돌아간 상태이기 때문에 numbers를 가르키는 것. 그렇기 때문에 [5]를 출력하는 것이다.

// //해결법 1
// //IIFE로 처리. 
// // i가 0개일때, 1개일때, 2개일때, 3개일때, 4개일 때를 각각의 funtion scope로 가두어서 처리한다. 이렇게 되면 setTimeout실행시점에 참고하는 index는 IIFE에서 인자로 넘긴 i의 값을 쓰기 때문에 문제 해결
// const numbers = [0, 1, 2, 3, 4];

// for (var i = 0; i < numbers.length; i++) {
//     (function(index) {
//         setTimeout(function() {
//             console.log(`[${index}] number ${numbers[index]} turn!`);
//         }, index * 1000);
//     })(i);
// }

//해결법 2
//var 대신 let을 쓰는 방법.

const numbers = [0, 1, 2, 3, 4]

for(let i = 0; i < numbers.length; i++) {
    setTimeout(function(){
        console.log(`[${i}] number ${numbers[i]} turn!`)
    }, i * 1000)
}


