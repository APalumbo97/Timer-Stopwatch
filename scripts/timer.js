/**
 * Author: Anthony Palumbo
 * Date: 7-30-2017
 * Description: Class for modeling a timer's functionality.
 */

class Timer {

    /**
     * Sets up a Timer object.
     * @param clock - the HTML object that contains the clock text
     */
    constructor(clock) {
        this.minutes = 0;
        this.seconds = 0;
        this.running = false;
        this.clock = clock;
        this.lastTime = null;
        this.displayText();
    }

    /**
     * Starts the timer.
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
     * Pauses the timer.
     */
    pause() {
        this.running = false;
        this.lastTime = null;
    }

    /**
     * Stops the timer if running and sets the minutes and seconds both to 0.
     */
    clear() {
        this.running = false;
        this.minutes = 0;
        this.seconds = 0;
        this.displayText();
    }

    /**
     * Animates the timer as time goes on.
     * @param timestamp - the current time in milliseconds
     */
    step(timestamp) {
        if (!this.running) {
            return;
        }
        if (this.incrementTime(timestamp - this.lastTime)) {
            this.lastTime = timestamp;
        }
        this.displayText();
        if (this.minutes != 0 || this.seconds != 0) {
            requestAnimationFrame(this.step.bind(this));
        } else {
            alert("The time is up.");
        }
    }

    /**
     * Increments the number of seconds once 1000 milliseconds has passed.
     * @param elapsedTime - the amount of time that has passed
     * @return - true if the time changed, false if less than 1000ms has passed or the time is up
     */
    incrementTime(elapsedTime) {
        if (elapsedTime > 1000) {
            this.seconds--;
            if (this.seconds == 0 && this.minutes == 0) {
                this.pause();
                return false;
            } else if (this.seconds < 0) {
                this.seconds = 59;
                this.minutes--;
            }
            return true;
        }
        return false;
    }

    /**
     * Validates the input form and sets the time for the timer.
     * @param form - the input form that contains values for the minutes and seconds
     * @return - false, to prevent the page from reloading scripts
     */
    setTime(form) {
        this.running = false;
        var minutes = form.elements["minutesInput"].value;
        var seconds = form.elements["secondsInput"].value;

        if (minutes < 0 || minutes > 99) {
            alert("Minutes must be between 0 and 99.");
            return;
        }
        if (seconds < 0 || seconds > 99) {
            alert("Seconds must be between 0 and 99.");
            return;
        }

        this.minutes = Number(minutes);
        this.seconds = Number(seconds);
        this.displayText();
        form.reset();

        return false;
    }

    /**
     * Determines how a number will be displayed in the clock.
     * @param num - the number that will be converted to a string
     * @return - a string for the number in the clock
     */
    displayString(num) {
        if (num == 0) {
            return "00";
        } else if (num < 10) {
            return "0" + Math.floor(num);
        } else if (num < 100) {
            return Math.floor(num).toString();
        } else {
            return this.displayString(num % 100);
        }
    }

    /**
     * Creates a string for the current time on the timer in minutes and seconds.
     * @return - the current time left as a string
     */
    getTimeString() {
        return this.displayString(this.minutes) + ":" + this.displayString(this.seconds);
    }

    /**
     * Sets the text for the clock div in HTML.
     */
    displayText() {
        this.clock.innerText = this.getTimeString();
    }

}
