class GuessingGame {

    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
        console.log(this.minRange + ":" + this.maxRange);
    }

    guess() {
        console.log( Math.ceil(this.minRange + (this.maxRange - this.minRange) / 2));
        return Math.ceil(this.minRange + (this.maxRange - this.minRange) / 2);
    }

    lower() {
        console.log("maxRange=" + this.guess());
        this.maxRange = this.guess();
    }

    greater() {
        console.log("minRange=" + this.guess());
        this.minRange = this.guess();
    }
}

module.exports = GuessingGame;
