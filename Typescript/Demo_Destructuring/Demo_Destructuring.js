var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Khai báo ra 1 đối tượng account
var account1 = {
    name: "huyvu",
    age: 20,
    gender: "Nam",
    address: "HN"
};
// sử dụng Destrucrturing
var name2 = account1.name, age2 = account1.age, gender2 = account1.gender;
console.log("Tên account1 là :", name2);
console.log("Tuổi account1 là:", age2);
console.log("Gender account1 là : ", gender2);
// sử dụng toán tử (... =  spread)
var worker = __assign(__assign({}, account1), { rank: 10 });
console.log("Thông tin worker là : ", worker.name, worker.age, worker.address);
