const bigImage = document.getElementById("right-content")
const rightContentOne = document.getElementById("one")
const rightContentTwo = document.getElementById("two")
const rightContentThree = document.getElementById("three")
const rcOne = document.querySelector("#one .one-four-content")
const rcTwo = document.querySelector("#two .two-four-content")
const rcThree = document.querySelector("#three .three-four-content")

function start(){
    rightContentOne.addEventListener("mouseenter",changeImg)
    rightContentTwo.addEventListener("mouseenter",changeImg)
    rightContentThree.addEventListener("mouseenter",changeImg)
    rightContentOne.addEventListener("mouseleave",changeDefault)
    rightContentTwo.addEventListener("mouseleave",changeDefault)
    rightContentThree.addEventListener("mouseleave",changeDefault)
}

start()


function changeImg(e){
    console.log(e.target.id)
    if (e.target.id == "one"){
        bigImage.style.backgroundImage = `url("images/big1.jpg")`
        bigImage.style.backgroundPosition = "center"
        rcTwo.style.opacity = "0.5";
        rcThree.style.opacity = "0.5";
    }
    else if (e.target.id == "two"){
        bigImage.style.backgroundImage = `url("images/big2.jpg")`
        bigImage.style.backgroundPosition = "right"
        rcOne.style.opacity = "0.5";
        rcThree.style.opacity = "0.5";
    }
    else if (e.target.id == "three"){
        bigImage.style.backgroundImage = `url("images/big3.jpg")`
        bigImage.style.backgroundPosition = "left"
        rcOne.style.opacity = "0.5";
        rcTwo.style.opacity = "0.5";
    }
    
}

function changeDefault(){
    bigImage.style.backgroundImage = `url("images/bigdefault.jpg")`
    bigImage.style.backgroundPosition = "center"
    rcOne.style.opacity = "1";
    rcTwo.style.opacity = "1";
    rcThree.style.opacity = "1";
}