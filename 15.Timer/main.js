const input = require("prompt-sync")();


function updateTimer() {
    if (time >= 0){
        console.log(time);
        time--;
    } else {
        clearInterval(intervalId);
        console.log("Time is up!!!")
    }
}

let time = parseInt(input("Enter seconds for a timer: "));
let intervalId;
if (time >= 0) {
    intervalId = setInterval(updateTimer, 1000);
} else {
    console.log("Please enter a valid time in seconds!");
}
