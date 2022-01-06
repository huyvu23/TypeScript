"use strict";
exports.__esModule = true;
var Department_1 = require("./Department");
var dep = new Department_1.Department(1, "Bảo vệ");
var dep2 = new Department_1.Department(2, "Sale");
var dep3 = new Department_1.Department(1, "bán hàng");
(0, Department_1.printDepartment)(dep);
(0, Department_1.printDepartment)(dep2);
(0, Department_1.printDepartment)(dep3);
