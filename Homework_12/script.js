'use strict';

function Calculator(value) {
    this.value = value
    
    this.add = function (val) {
        return this.value += val;
    }
    this.sub = function (val) {
        return this.value -= val;
    }
    this.div = function (val) {
        return this.value /= val;
    }
    this.mult = function (val) {
        return this.value *= val;
    }
    this.set = function (val) {
        return this.value = val;
    }
    this.result = function () {
        return this.value;
    }
}