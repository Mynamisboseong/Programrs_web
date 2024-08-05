// 버튼을 3개 만든다
const $button1 = document.createElement('button')
$button1.textContent = 'Button1'

const $button2 = document.createElement('button')
$button2.textContent = 'Button2'

const $button3 = document.createElement('button')
$button3.textContent = 'Button3'

// 만든 버튼을 화면에 그린다.
const $main = document.querySelector('#app')

$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)

// 버튼을 클릭하면 삭선이 그어진다.
$button1.addEventListener('click', () -> {
    if($button1.style.textDecoration === 'line - through') {
        $button1.style.textDecoration = 'none'
    } else {
        $button1.style.textDecoration = 'line - through';
    }
})

//정리해보자 (명령어 방식)

const $button1 = document.createElement('button')
$button1.textContent = 'button1'

const $button2 = document.createElement('button')
$button2.textContent = 'button2'

const $button3 = document.createElement('button')
$button3.textContent = 'button3'

const toggleButton = ($button) => {
    if ($button.style.textDecoration === '') {
        $button.style.textDecoration = 'line-through'
    } else {
        $button.style.textDecoration = ''
    }
}

document.querySelector('#app').appendChild($button1)
document.querySelector('#app').appendChild($button2)
document.querySelector('#app').appendChild($button3)

document.querySelectorAll('#app button').forEach($button => $button.addEventListener('click',(e) => {
    toggleButton(e.target)
}))

//ToggleButton 이라는 이름으로 추상화하기
function ToggleButton({
    $target,
    text
}) {
    const $button = () => {
        if ($button.style.textDecoration === '') {
            $button.style.textDecoration = 'line-through'
        } else {
            $button.style.textDecoration = ''
        }
    }
    this.render = () => {
        $button.textContent = text
        if (!isInit) {
            $target.appendChild($button)
            $button.addEventListener('click',() => {
                this.toggle()
            })
            isInit = true
        }
    }
    this.render()
}


