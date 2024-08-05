//객체의 메서드 내에 내부함수가 있을 경우, 함수 호출방식으로 취급되어 전역객체를 바라봄.
//console.log(this.age); 문구에서 undefined 가 출력되는 모습
const foo = {
    name : 'joy',
    age : 28,
    getName() {
        console.log(this.name);
        function getAge() {
            console.log(this.age);
        }
        getAge();
    },
};

foo.getName();

//이를 해소하기 위해서 다른 변수에 저장하고 사용하거나 내부함수를 해당 객체에 bind 함
const foo = {
    name : 'joy' ,
    age : 28,
    getName() {
        const that = this;
        function getAge() {
            console.log(that.age);
        }
        getAge();
    },
};

foo.getName();

//혹은 아래와 같은 코드
const foo = {
    name : 'joy' ,
    age : 28,
    getName() {
        const that = this;
        function getAge() {
            console.log(that.age);
        }
        getAge(foo);
    },
};

foo.getName();
