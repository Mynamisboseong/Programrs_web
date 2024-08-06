function RockBand(members) {
    this.members = members;
    this.perform = fuction() {
        setTimeout(function() {
            this.members.forEach(function(member){
                member.perform();
            })
        },1000)
    }
}

var theOralCigrettes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();

// this와 scope에 대한 문제 중 하나이다. 기본적으로 JS는 함수스코프에 유의를 해야 한다. 4번째 줄의 this는 무엇일까?
// 2, 3번쨰 줄의 this는 5번째 줄의 this를 가르키지 않는다. 2,3번째 this는 RockBand fuction에 있는 this고, 5번째의 this는 setTimeout function에 있는 this다. 즉 this가 RockBand의 this를 가르키지 않는다.


//해결법 1. Arrow function
//arrow function은 자체로 function 스코프를 만들지 않고 해당 arrowfuction 상위에 있는 스코프를 찾아간다. 자연스럽게 this가 RockBand의 this를 가르키게 된다.
function RockBand(members) {
    this.members = members;
    this.perform = fuction() {
        setTimeout(() => {
            this.members.forEach(function(member){
                member.perform();
            })
        },1000)
    }
}

var theOralCigrettes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();

//해결법 2. bind 사용
//bind(this)의 this는 RockBand내부에 있는 this를 가르킨다. 왜냐하면, RockBand function 스코프 안에 있으니까! 그리고 bind는 bind를 통해 생성된 새로운 함수를, RockBand function의 this와 연결시켜준다.
//this가 RockBand의 this를 가르키게 된다.
function RockBand(members) {
    this.members = members;
    this.perform = fuction() {
        setTimeout(function() {
            this.members.forEach(function(member){
                member.perform();
            })
        }.bind(this),1000)
    }
}

var theOralCigrettes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();

//해결법 3. 클로져 사용
//RockBand의 this 를 that이라는 변수에 넣었고, setTimeout function에서는 that.members.forEach... 이런식으로 접근을 하고 있다. 
//setTimeout function에서 해당 함수스코프 밖에 있는 변수를 참고하고 있는데, 이것을 클로져 라고 한다.
//해당 코드처럼, this를 다른 변수에 넣어놓고, 클로저를 통해 접근을 하면, 함수 스코프 밖에 있는 변수도 참조할 수 있는 기능을 클로져라고 한다. 
function RockBand(members) {
    var that = this;
    this.members = members;
    this.perform = fuction() {
        setTimeout(function() {
            that.members.forEach(function(member){
                member.perform();
            })
        },1000)
    }
}

var theOralCigrettes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();
