var stopwatch = new Stopwatch(document.querySelector(".stopwatch"), document.querySelector(".laps"));

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

initialize();
