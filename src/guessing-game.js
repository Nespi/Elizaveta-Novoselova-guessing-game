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
        console.log((this.maxRange - this.minRange)/2^0 + this.minRange);
        return ((this.maxRange - this.minRange)/2^0 + this.minRange);
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
