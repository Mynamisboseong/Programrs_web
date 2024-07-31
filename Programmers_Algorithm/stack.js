//스택메모리설정
function sum (a,b) {
    return a + b;
}

function print (value) {
    console.log(value);
}

print(sum(5,10));

//자바스크립트에서 스택을 배열로 사용하는법
const stack = [];

//push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); //[1,2,3]

//pop
stack.pop();
console.log(stack); //[1,2]

//Get Top
console.log(stack[stack.length - 1]);  //2

//올바른 괄호
function solution(s) {
    const stack = [];

    for (const c of s) {
        if( c === '(') {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

