/**
 * Author: Anthony Palumbo
 * Date: 7-30-2017
 * Description: Class for modeling a timer's functionality.
 */

class Timer {

    constructor(clock) {
        this.minutes = 0;
        this.seconds = 0;
        this.running = false;
        this.clock = clock;
        this.displayText();
    }

    start() {
        // TODO
        alert("START");
        this.running = true;
    }

    pause() {
        // TODO
        alert("PAUSE");
        this.running = false;
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
