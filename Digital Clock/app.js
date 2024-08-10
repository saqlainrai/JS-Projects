
let clock = document.querySelector("#clock");
let btn1 = document.querySelector("#start");
let btn2 = document.querySelector("#stop");
let timer;

TimeTravel();

function TimeTravel() {
    timer = setInterval(() => {
        let update = new Date();
        update = update.toLocaleTimeString();
        clock.innerHTML = update.toString().toUpperCase();
    }, 1000);
}
btn1.addEventListener("click", TimeTravel);

btn2.addEventListener("click", () => {
    clearInterval(timer);
})