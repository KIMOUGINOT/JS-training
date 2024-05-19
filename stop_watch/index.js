let secondsElapsed = 0;
let interval = null;
let lap_number = 0;
const time = document.getElementById("time")

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const minute = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minute)}:${padStart(seconds)}`;
}

function timer(){
    secondsElapsed++;
    setTime();
}

function startClock(){
    if (interval) stopClock()
    interval = setInterval(timer,1000)
}

function stopClock(){
    clearInterval(interval)
}

function resetClock(){
    stopClock()
    secondsElapsed = 0 ;
    clearLap()
    setTime()
}

function addLap(){
    lap_number++;
    const container = document.getElementById('container');
    const newHeading = document.createElement('h3');
    newHeading.innerHTML = `lap ${lap_number} : ${time.innerHTML}`;
    container.appendChild(newHeading);
}

function clearLap(){
    const container = document.getElementById('container');
    container.innerHTML = '';
}