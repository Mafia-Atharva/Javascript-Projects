const minsLabel = document.getElementById('minutes');
const secsLabel = document.getElementById('seconds');
const millisecsLabel = document.getElementById('milliseconds');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist')

// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10)
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function stopTimer() {
        clearInterval(interval)
        addLapToList();
        resetTimerData();
        startBtn.disabled = false;

}

function pauseTimer() {
    clearInterval(interval)
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;
    pauseBtn.disabled = false;
}

function updateTimer() {
    milliseconds++
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {
    millisecsLabel.textContent = padTime(milliseconds);
    secsLabel.textContent = padTime(seconds);
    minsLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addLapToList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;
    lapList.appendChild(listItem);
}