"use strict";
exports.__esModule = true;
exports.printDepartment = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getid = function () {
        return this.id;
    };
    Department.prototype.getname = function () {
        return this.name;
    };
    Department.prototype.setid = function (value) {
        this.id = value;
    };
    Department.prototype.setname = function (value) {
        this.name = value;
    };
    return Department;
}());
exports.Department = Department;
//                          (tên biến : kiểu dữ liệu)
function printDepartment(department) {
    console.log("ID" + department.getid() + department.getname());
}
exports.printDepartment = printDepartment;
