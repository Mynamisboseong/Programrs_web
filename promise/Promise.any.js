function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

const promises = [1, 2, 3, 4, 5].map ( n => {
    const delayTime = getRandomInt(1000, 5000)
    return new Promise((resolve, reject) => {
        if(n === 1) {
            return reject(`${n}번 고양이 기권!`)
        }

        setTimeout(() => {
            console.log(`${n}번 고양이 완주!`)
            resolve(`${n}번 고양이 승리!`)
        }, delayTime)
    })
})

Promise.any(promises)
    .then(message => console.log(message))