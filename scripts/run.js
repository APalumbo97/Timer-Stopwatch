/**
 * Author: Anthony Palumbo
 * Date: 7-29-2017
 * Description: Sets up the buttons for the stopwatch and timer.
 */

/**
 * Sets up the buttons to control the stopwatch.
 */
function initialize() {
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";
    startBtn.setAttribute("onClick", "stopwatch.start();");
    document.getElementById("buttons").appendChild(startBtn);

    var stopBtn = document.createElement("button");
    stopBtn.innerHTML = "Stop";
    stopBtn.setAttribute("onClick", "stopwatch.stop();");
    document.getElementById("buttons").appendChild(stopBtn);

}

var stopwatch = new Stopwatch(document.querySelector(".stopwatch"), document.querySelector(".laps"));

initialize();
