const body = document.getElementsByTagName("body")[0]

function setBackgroundColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const colour = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = colour;
}