"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    Staff.prototype.getname = function () {
        return this.name;
    };
    Staff.prototype.getage = function () {
        return this.age;
    };
    Staff.prototype.getgender = function () {
        return this.gender;
    };
    Staff.prototype.getaddress = function () {
        return this.address;
    };
    Staff.prototype.setname = function (value) {
        this.name = value;
    };
    Staff.prototype.setage = function (value) {
        this.age = value;
    };
    Staff.prototype.setgender = function (value) {
        this.gender = value;
    };
    Staff.prototype.setaddress = function (value) {
        this.address = value;
    };
    Staff.prototype.printInforStaff = function () {
        console.log("Name: " +
            this.name +
            " Age: " +
            this.age +
            " Gender: " +
            this.gender +
            " Address: " +
            this.address);
    };
    return Staff;
}());
exports.Staff = Staff;
