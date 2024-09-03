// 다음 코드의 실행결과는?
function Cat(name,age) {
    this.name = name;
    this.age = age;
}

// "new키워드 추가! (원래 없었음. 그래서 오류남)"
const tabby1 = new Cat('nana',7);
console.log(tabby1.name)

//오류가 발생한다.
//자바스크립트는 this가 일정하지 않고, 함수가 실행되는 시점에 결정되는 경우가 대부분이다. 이 문제를 보면 Cat이라는 함수를 실행하면 Cat함수에 있는 this는 window를 가르키게 된다.
//함수 내에서 보면 함수의 실행결과를 리턴하는 코드가 아예 없음.그렇기 때문에 저 tabby1은 cat함수가 리턴하는 값이 없기때문에 undefined가 되는거다.
//7번째 함수에서 undefined의 name을 접근하려고 하기때문에 문제가 생기는 것이다.

//this를 잘 모르면 의도치 않게 전역 window 객체를 건드리거나 수정하게 되는 일이 생기게 된다.

//함수 앞에 new 키워드를 붙혀주면 정상적으로 실행된다. 자바스크립트에서는 함수를 실행할 때 new 키워드를 통해서 실행할 수 있는데, new 키워드를 붙히게 되면 Cat 함수 내의 this 는 윈도우를 가르키는게 아니라, 
//new를 통해 실행이 된 Cat함수의 새로운 객체를 가르키게 된다. 또한 따로 rturn 문을 넣지 않아도 const tabby1에는 this가 들어가게 된다.
