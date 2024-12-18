console.log("--------Current Time--------");

setInterval(displayTime, 1000);

function displayTime() {
    let time = Date().split(" ")[4];
    console.log(time);
}
