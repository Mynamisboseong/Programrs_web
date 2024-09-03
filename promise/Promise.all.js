const promise1 = delay(1000)
const promise2 = delay(2000)
const promise3 = delay(3000)

Promise.all([promise1, promise2, promise3]).then(() => {
    //promise1, promise2, promise3이 모두 처리된 이후 호출
})