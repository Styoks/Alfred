const phrasesArray = [
    "no",
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "Alfred pls",
    "Just think about it",
    "If you say no, I'll be very sad",
    "VERY very sad",
    "VERY very very very very sad",
    "Ok fine, I'll sopt asking...",
    "Just kidding, PLEASE SAY YES",
    "You're breaking my heart :CCC"

]
let phraseNum = 0

const yesButton = document.querySelector("#yes")
const noButton = document.querySelector("#no")
const body = document.querySelector("body")
let currentSize = 40
noButton.addEventListener("pointerdown", ()=>{
    phraseNum += 1
    if (phraseNum > 11){
        run()
    }
    noButton.innerHTML = phrasesArray[`${phraseNum}`]
    yesButton.style.fontSize = `${currentSize+=10}px`
})
yesButton.addEventListener("pointerdown", ()=>{
    body.innerHTML= ""
    const image = document.createElement("img")
    const span = document.createElement("span")
    const span2 = document.createElement("span")
    span2.classList.add("span2")
    span2.innerHTML = "Tu, jo, restauransito bo, no se, pensa-ho"
    span.innerHTML = "Jo tambe t'estimo"
    image.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWh6NThreTh0OHhzbHF0MXJqNTN6bzdwbm1rcTVjMnI1dmkwZ29taSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U6BjTKYQ5GsgM/giphy.gif"
    image.style.height = "600px"
    body.appendChild(span)
    body.appendChild(image)
    body.appendChild(span2)
})

function run () {
    body.innerHTML= ""
    const image = document.createElement("img")
    const span = document.createElement("span")
    span.innerHTML = "Ok, byeeeeeee"
    image.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VpeDE0dW5vOXFvYmhxbGw3cm5lYW9ucmRzc3oxeTNzZjVkMWh2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ceHKRKMR6Ojao/giphy.gif"
    image.style.height = "600px"
    body.appendChild(span)
    body.appendChild(image)
}