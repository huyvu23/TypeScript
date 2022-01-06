import { Worker } from "./Worker";
import { Engineer } from "./Engineer";
import { Employee } from "./Employee";

// Khai báo ra các biến lưu thông tin worker dùng var, ở đây thấy cấu trúc của Var khai báo khá cởi mở, không yêu cầu về kểu dữ liệu
var worker1 = new Worker("Worker1", 20, "Male", "HN", 10); // tạo ra đối tượng worker
var worker2 = new Worker("Worker2", 22, "Male", "HN", 18);
var worker3 = new Worker("Worker3", 23, "Male", "HN", 10);

// in ra thông tin worker
// worker1.printInforWorker();

console.log(
  "========================= Demo Array Worker ==============================="
);
// Tạo ra 1 array
var workerArray: Worker[];

workerArray = [worker1, worker2, worker3];
// Dùng vòng for để in dữ liệu mảng
workerArray.forEach((element) => {
  element.printInforWorker();
});
console.log("================== Finish =======================");

console.log(
  "============================================================================================================"
);

let Engineer1 = new Engineer("Engineer1", 20, "Male", "HN", "DEV"); // Tạo mới 1 đối tượng Worker.
let Engineer2 = new Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
let Engineer3 = new Engineer("Engineer3", 24, "Male", "HN", "DEV");

let EngineerArray: Engineer[];
EngineerArray = [Engineer1, Engineer2, Engineer3];
console.log("=========== Demo Engineer Array ===========");

EngineerArray.forEach((element) => {
  element.printInforEngineer();
});

console.log("================== Finish =======================");

console.log("------------------Demo Set Engineer ------------------");

let engineerSet = new Set(); // Khai báo 1 set
engineerSet.add(Engineer1); // Add các phần tử vào trong set
engineerSet.add(Engineer2);
engineerSet.add(Engineer3);

// Lấy ra tổng số phần tử trong Set
console.log("Tổng số phần tử trong Set: " + engineerSet.size);
console.log("Xóa 1 phần tử trong Set: " + engineerSet.delete(Engineer1));
// In thông tin các phần tử trong set
engineerSet.forEach((element) => {
  console.log(element);
});
console.log("------------------Finish Demo Set ------------------");
console.log(
  "========================== Demo Employee ========================"
);

let Employee1 = new Employee("Employee1", 20, "Male", "HN", "Task1"); // Tạo mới 1 đối tượng Employee
let Employee2 = new Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
let Employee3 = new Employee("Employee3", 24, "Male", "HN", "Task3");

let EmployeerArray: Employee[];
EmployeerArray = [Employee1, Employee2, Employee3];

EmployeerArray.forEach((element) => {
  element.printInforEmployee();
});
