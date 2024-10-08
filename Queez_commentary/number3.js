// 다음 코드의 실행 결과는?
var idiots = {
    name : 'idiots',
    genre : 'punk rock',
    members : {
        roto : {
            memberName : 'roto',
            play: function() {
                console.log(`band ${this.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play()

// 결과 : band undefined roto play start
// play : function 함수의 this는 roto 라는 객체를 바라보고 있기 때문임
// 함수 스코프의 개념이 있어야 풀 수 있는 문제임 (this가 어디를 바로보고 있는지)

//모두 출력하려고 하면 어떻게 해결해야 할까?
//idiots.name 이라고 정의하게 되면 name은 idiots 객체를 바라보기 때문에 정상적으로 출력이 가능하다
var idiots = {
    name : 'idiots',
    genre : 'punk rock',
    members : {
        roto : {
            memberName : 'roto',
            play: function() {
                console.log(`band ${idiots.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play()
