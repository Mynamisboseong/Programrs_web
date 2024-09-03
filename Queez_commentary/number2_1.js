const logger = (function(){
    let logCount = 0;
    function log(message) {
        console.log(message);
        logCount = logCount + 1;
    }

    function getLogCount() {
        return logCount;
    }
    return {
        log: log,
        getLogCount: getLogCount
    }
})()

//위 코드를 보면 logger 라는 변수 안에 함수가 정의되어있고, 그 함수안에 실행문이 작성되어있다. logger 변수 function에 정의되어있는 logCount 는, 외부에서 접근할 수없다. 일종의 private 효과이다.
