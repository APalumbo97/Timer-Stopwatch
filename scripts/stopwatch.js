class Stopwatch {

    constructor(clock, lapsObj) {
        this.minutes = 0;
        this.seconds = 0;
        this.secondParts = 0;
        this.laps = [];
        this.running = false;
        this.clock = clock;
        this.lapsObj = lapsObj;
        this.displayText();
    }

    start() {
        // TODO
    }

    stop() {
        // TODO
        this.running = false;
    }

    lap() {
        // TODO
    }

    displayString(num) {
        if (num == 0) {
            return "00";
        } else if (num < 10) {
            return "0" + num;
        } else {
            return (num % 60).toString();
        }
    }

    displayText() {
        var minutes = this.displayString(this.minutes);
        var seconds = this.displayString(this.seconds);
        var secondParts = this.displayString(this.secondParts);
        this.clock.innerText = minutes + ":" + seconds + ":" + secondParts;
    }
}
