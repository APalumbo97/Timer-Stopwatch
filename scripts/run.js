/**
 * Author: Anthony Palumbo
 * Date: 7-29-2017
 * Description: Sets up the buttons for the stopwatch and timer.
 */

var timer;
var stopwatch;

/**
 * Sets up the timer controls.
 */
function initializeTimer() {
    // TODO
}

/**
 * Removes the timer HTML elements from the page.
 */
function removeTimer() {
    // TODO
    timer = null;
}

/**
 * Transitions from the stopwatch functionality to the timer functionality.
 */
function switchToTimer() {
    removeStopwatch();
    initializeTimer();
    timer = new Timer();
}

/**
 * Sets up the buttons to control the stopwatch.
 */
function initializeStopwatch() {
    var stopwatchDiv = document.createElement("div");
    stopwatchDiv.setAttribute("id", "stopwatch");
    document.body.appendChild(stopwatchDiv);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "buttons");
    document.body.appendChild(buttonsDiv);

    var lapsUl = document.createElement("ul");
    lapsUl.setAttribute("id", "laps");
    document.body.appendChild(lapsUl);

    var startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";
    startBtn.setAttribute("onClick", "stopwatch.start();");
    document.getElementById("buttons").appendChild(startBtn);

    var stopBtn = document.createElement("button");
    stopBtn.innerHTML = "Stop";
    stopBtn.setAttribute("onClick", "stopwatch.stop();");
    document.getElementById("buttons").appendChild(stopBtn);

    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset";
    resetBtn.setAttribute("onClick", "stopwatch.reset();");
    document.getElementById("buttons").appendChild(resetBtn);

    var lapBtn = document.createElement("button");
    lapBtn.innerHTML = "Lap";
    lapBtn.setAttribute("onClick", "stopwatch.createLap();");
    document.getElementById("buttons").appendChild(lapBtn);
}

/**
 * Removes the stopwatch HTML elements from the page.
 */
function removeStopwatch() {
    stopwatch.reset();
    document.body.removeChild(document.getElementById("stopwatch"));
    document.body.removeChild(document.getElementById("buttons"));
    document.body.removeChild(document.getElementById("laps"));
    stopwatch = null;
}

/**
 * Transitions from the timer functionality to the stopwatch functionality.
 */
function switchToStopwatch() {
    removeTimer();
    initializeStopwatch();
    stopwatch = new Stopwatch(document.querySelector("#stopwatch"), document.querySelector("#laps"));
}

/**
 * Switches to either the timer or stopwatch.
 * @param checkbox - the HTML element for the switch
 */
function checkBoxClick(checkbox) {
    if (checkbox.checked) {
        switchToStopwatch();
    } else {
        switchToTimer();
    }
}
