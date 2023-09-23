const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateClock() {
    let date_now = new Date();
    let hours = date_now.getHours();
    let minutes = date_now.getMinutes();
    let seconds = date_now.getSeconds();

    hours = hours<10 ? "0"+hours : hours;
    minutes = minutes<10 ? "0"+minutes : minutes;
    seconds = seconds<10 ? "0"+seconds : seconds;

    hoursEl.textContent = hours;
    minutesEl.textContent= minutes;
    secondsEl.textContent=seconds;
}

setInterval(updateClock, 1000);