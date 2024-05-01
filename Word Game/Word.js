const options = {
    تاریکی: "ان چیست که هر چه بیشتر باشد کمتر میبینید",
    خرس: "کدام حیوان است که برعکس شود قرمز میشود",
    دندان: "سفید است اما برف نیست ریشه دارد اما درخت نیست",
    کوبا: "کدام کشور است که حرف اولش را برداریم بیماری میشود",
    دستکش: "آن چیست که چهار انگشت و یک شصت دارد اما نه بدن دارد نه مغز؟"

};

let message = document.querySelector(".msg")
let hintRef = document.querySelector(".hint-ref")
let controls = document.querySelector(".control-container")
let startBtn = document.querySelector("#start")
let letterContainer = document.querySelector(".letter-container")
let userInpSection = document.querySelector(".user-input-section")
let result = document.querySelector("#result")
let imgs = document.querySelectorAll("img")
var word = document.querySelector("#word")
var words = Object.keys(options)
var randomWord = ""
var randomHint = ""
var win_count = 0
var lose_count = 0



const generateRandomValue = (array) => Math.floor(Math.random() * array.length)

const blocker = () => {
    let lettersBtn = document.querySelectorAll(".letters")
    stopGame()
}

startBtn.addEventListener("click", () => {
    controls.classList.add("hide")
    init()


})


const stopGame = () => {
    controls.classList.remove("hide")
}

const generateWord = () => {
    letterContainer.classList.remove("hide")
    userInpSection.innerText = ""
    randomWord = words[generateRandomValue(words)]
    randomHint = options[randomWord]
    hintRef.innerHTML = `<div id="wordHint"><span>چیستان: </span>${randomHint}</div>`
    let displayItem = ""
    randomWord.split("").map(value => {
        displayItem += '<span class="inputSpace"> _ </span>'

    })
    userInpSection.innerHTML = displayItem
    userInpSection.innerHTML += `<div id='chanceCount'>امتیاز: ${lose_count}</div>`

}

const chk = (pics) => {


    let charArray = randomWord.split("")
    let inputSpace = document.getElementsByClassName("inputSpace")


    if (charArray.includes(pics.name)) {
        charArray.map((char, index) => {
            if (char == pics.name) {
                inputSpace[index].innerText = char
                message.innerText = `کلمه انتخابی در جواب چیستان موجود است`
                message.style.color = "#22CE83"
                win_count += 1
                if (win_count == charArray.length) {
                    result.innerText = "شما برنده شدید"
                    startBtn.innerText = "شروع مجدد"
                    blocker()
                }
            }
        })
    }
    else {
        lose_count -= 1
        document.getElementById("chanceCount").innerText = `امتیاز: ${lose_count}`
        message.innerText = "کلمه انتخابی در  جواب چیستان موجود نیست"
        message.style.color = "#E42217"
        if (lose_count == 0) {
            word.innerHTML = `جواب چیستان : <span>${randomWord}</span>`
            result.innerHTML = "شما برنده نشدید"
            blocker()
        }
    }

}


const init = () => {
    win_count = 0
    lose_count = 5
    randomWord = ""
    word.innerText = ""
    randomHint = ""
    message.innerText = ""
    userInpSection.innerHTML = ""
    letterContainer.classList.add("hide")
    generateWord()
    chk()


}

window.onload = () => {
    init()

}

