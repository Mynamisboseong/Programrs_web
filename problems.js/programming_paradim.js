//명령형 프로그래밍과 선언형 프로그래밍의 차이
//프로그래밍 패러다임

//명령형 프로그래밍
const double = (arr) => {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 2)
    }
    return results
}

//선언형 프로그래밍
const double = (arr) -> {
    retirm arr.map(n => n * 2)
}

//예시2
function double(arr) {
    return arr.filter(param => typeof param === 'number')
                .map(number => number * 2)
}

//예시3
const filterCats = (cats) => {
    return cats.filter(
        cat =>
            cat &&
            cat.colors.includes('black') &&
            cat.ear === 'unfolded'
    ).map(cat => cat.name)
}