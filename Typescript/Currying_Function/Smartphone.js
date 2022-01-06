"use strict";
exports.__esModule = true;
exports.Smartphone = void 0;
var Smartphone = /** @class */ (function () {
    function Smartphone(name, price) {
        this.name = name;
        this.price = price;
    }
    Smartphone.prototype.getname = function () {
        return this.name;
    };
    Smartphone.prototype.getprice = function () {
        return this.price;
    };
    Smartphone.prototype.setname = function (value) {
        this.name = value;
    };
    Smartphone.prototype.setprice = function (value) {
        this.price = value;
    };
    return Smartphone;
}());
exports.Smartphone = Smartphone;
