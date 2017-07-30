/**
 * Author: Anthony Palumbo
 * Date: 7-29-2017
 * Description: Class for modeling a stopwatch's functionality.
 */

class Stopwatch {

    /**
     * Setups up a Stopwatch object.
     * @param clock - the HTML object that contains the clock text
     * @param lapsObj - the HTML object where the laps for the stopwatch will go
     */
    constructor(clock, lapsObj) {
        this.minutes = 0;
        this.seconds = 0;
        this.secondParts = 0;
        this.laps = [];
        this.running = false;
        this.clock = clock;
        this.lapsObj = lapsObj;
        this.lastTime = null;
        this.displayText();
    }

    /**
     * Starts the stopwatch.
     */
    start() {
        if (!this.running) {
            if (this.lastTime == null) {
                this.lastTime = performance.now();
            }
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }

    /**
     * Stops the stopwatch.
     */
    stop() {
        this.running = false;
        this.lastTime = null;
    }

    /**
     * Animates the stopwatch as time goes on.
     * @param timestamp - the current time in milliseconds
     */
    step(timestamp) {
        if (!this.running) {
            return;
        }
        this.incrementTime(timestamp - this.lastTime);
        this.lastTime = timestamp;
        this.displayText();
        requestAnimationFrame(this.step.bind(this));
    }

    /**
     * Calculates the correct values for the minutes, seconds, and secondParts.
     * @param elapsedTime - the difference in time in milliseconds
     */
    incrementTime(elapsedTime) {
        this.secondParts += elapsedTime / 1000 * 60;
        if (this.secondParts >= 60) {
            this.secondParts = this.secondParts % 60;
            this.seconds++;
        }
        if (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes++;
        }

    }

    /**
     * Determines how a number will be displayed in the clock.
     * @param num - the number to be displayed
     * @return - a string to be displayed for the number
     */
    displayString(num) {
        if (num == 0) {
            return "00";
        } else if (num < 10) {
            return "0" + Math.floor(num);
        } else if (num <= 60) {
            return Math.floor(num).toString();
        } else {
            return this.displayString(num % 60);
        }
    }

    /**
     * Sets the text for the clock in HTML.
     */
    displayText() {
        this.clock.innerText = this.displayString(this.minutes) + ":" + this.displayString(this.seconds) + ":"
                               + this.displayString(this.secondParts);
    }

}
