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
    var timerDiv = document.createElement("div");
    timerDiv.setAttribute("id", "timer");
    document.body.appendChild(timerDiv);

    var inputForm = document.createElement("form");
    inputForm.setAttribute("onsubmit", "return timer.setTime(this);s");
    inputForm.setAttribute("method", "POST");

    var minutesInput = document.createElement("input");
    minutesInput.setAttribute("type", "number");
    minutesInput.setAttribute("name", "minutesInput");
    inputForm.innerHTML += "Minutes: ";
    inputForm.appendChild(minutesInput);

    var secondsInput = document.createElement("input");
    secondsInput.setAttribute("type", "number");
    secondsInput.setAttribute("name", "secondsInput");
    inputForm.innerHTML += "Seconds: ";
    inputForm.appendChild(secondsInput);

    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    inputForm.appendChild(submitBtn);

    document.body.appendChild(inputForm);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "buttons");
    document.body.appendChild(buttonsDiv);

    var startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";
    startBtn.setAttribute("onClick", "timer.start();");
    buttonsDiv.appendChild(startBtn);

    var pauseBtn = document.createElement("button");
    pauseBtn.innerHTML = "Pause";
    pauseBtn.setAttribute("onClick", "timer.pause();");
    buttonsDiv.appendChild(pauseBtn);

    var clearBtn = document.createElement("button");
    clearBtn.innerHTML = "Clear";
    clearBtn.setAttribute("onClick", "timer.clear();");
    buttonsDiv.appendChild(clearBtn);
}

/**
 * Removes the timer HTML elements from the page.
 */
function removeTimer() {
    // TODO
    document.body.removeChild(document.getElementById("timer"));
    document.body.removeChild(document.getElementsByTagName("form")[0]);
    document.body.removeChild(document.getElementById("buttons"));
    timer = null;
}

/**
 * Transitions from the stopwatch functionality to the timer functionality.
 */
function switchToTimer() {
    removeStopwatch();
    document.body.style.backgroundColor = "#FF3F3F";
    initializeTimer();
    timer = new Timer(document.querySelector("#timer"));
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
    buttonsDiv.appendChild(startBtn);

    var stopBtn = document.createElement("button");
    stopBtn.innerHTML = "Stop";
    stopBtn.setAttribute("onClick", "stopwatch.stop();");
    buttonsDiv.appendChild(stopBtn);

    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset";
    resetBtn.setAttribute("onClick", "stopwatch.reset();");
    buttonsDiv.appendChild(resetBtn);

    var lapBtn = document.createElement("button");
    lapBtn.innerHTML = "Lap";
    lapBtn.setAttribute("onClick", "stopwatch.createLap();");
    buttonsDiv.appendChild(lapBtn);
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
    document.body.style.backgroundColor = "#00B789";
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

initializeTimer();
timer = new Timer(document.querySelector("#timer"));
