//your JS code here. If required.
let timer= document.querySelector("#timer");

function showTimeAndDate() {
    const date= new Date();
    let currentDate= date.toLocaleDateString("en-IN");
    let time= date.toLocaleTimeString("en-IN");

    timer.textContent= `${currentDate}, ${time.toUpperCase()}`
}

showTimeAndDate();
setInterval(showTimeAndDate, 1000);