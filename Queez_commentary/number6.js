// var, let, const의 차이는 무엇일까요?

//var는 function scope이고, 변수 재할당이 가능하며, var로 실행한 변수 혹은 함수는 호이스팅이 일어난다.
//호이스팅(hoisting) ?
//호이스팅은 실행할 때 function 스코프 상에서 var가 선언된 맨 위로 모든 var로 된 키워드가 다 올라가는 현상을 말한다.

//이런 코드가 있다면
function hoistingExample(value) {
    var name = 'hoisting'

    if (value === 'what') {
        var type = 'what type'
    }

    var language = 'javascript'

    for (var i = 0; i < language.length; i++) {
        console.log(i)
    }

    var somethingDo = function() {
        alert('javascript study')
    }
}

//
function hoistingExample(value) {
    var name, type, language, i, somethingDo;

    name = 'hoisting'

    if (value === 'what') {
        type = 'what type'
    }

    var language = 'javascript'

    for (i = 0; i < language.length; i++) {
        console.log(i)
    }

    somethingDo = function() {
        alert('javascript study')
    }
}