"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
var Engineer_1 = require("./Engineer");
var Employee_1 = require("./Employee");
var worker1 = new Worker_1.Worker("Worker1", 20, "Male", "HN", 10); // tạo ra đối tượng worker
var worker2 = new Worker_1.Worker("Worker2", 22, "Male", "HN", 18);
var worker3 = new Worker_1.Worker("Worker3", 23, "Male", "HN", 10);
// in ra thông tin worker
// worker1.printInforWorker();
console.log("========================= Demo Array Worker ===============================");
// Tạo ra 1 array
var workerArray;
workerArray = [worker1, worker2, worker3];
// Dùng vòng for để in dữ liệu mảng
workerArray.forEach(function (element) {
    element.printInforWorker();
});
console.log("================== Finish =======================");
console.log("============================================================================================================");
var Engineer1 = new Engineer_1.Engineer("Engineer1", 20, "Male", "HN", "DEV"); // Tạo mới 1 đối tượng Worker.
var Engineer2 = new Engineer_1.Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
var Engineer3 = new Engineer_1.Engineer("Engineer3", 24, "Male", "HN", "DEV");
var EngineerArray;
EngineerArray = [Engineer1, Engineer2, Engineer3];
console.log("=========== Demo Engineer Array ===========");
EngineerArray.forEach(function (element) {
    element.printInforEngineer();
});
console.log("================== Finish =======================");
console.log("------------------Demo Set Engineer ------------------");
var engineerSet = new Set(); // Khai báo 1 set
engineerSet.add(Engineer1); // Add các phần tử vào trong set
engineerSet.add(Engineer2);
engineerSet.add(Engineer3);
// Lấy ra tổng số phần tử trong Set
console.log("Tổng số phần tử trong Set: " + engineerSet.size);
console.log("Xóa 1 phần tử trong Set: " + engineerSet["delete"](Engineer1));
// In thông tin các phần tử trong set
engineerSet.forEach(function (element) {
    console.log(element);
});
console.log("------------------Finish Demo Set ------------------");
console.log("========================== Demo Employee ========================");
var Employee1 = new Employee_1.Employee("Employee1", 20, "Male", "HN", "Task1"); // Tạo mới 1 đối tượng Employee
var Employee2 = new Employee_1.Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
var Employee3 = new Employee_1.Employee("Employee3", 24, "Male", "HN", "Task3");
var EmployeerArray;
EmployeerArray = [Employee1, Employee2, Employee3];
EmployeerArray.forEach(function (element) {
    element.printInforEmployee();
});
