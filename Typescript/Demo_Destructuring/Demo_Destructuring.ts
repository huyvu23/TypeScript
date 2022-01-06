// Khai báo ra 1 đối tượng account
let account1 = {
  name: "huyvu",
  age: 20,
  gender: "Nam",
  address: "HN",
};

// sử dụng Destrucrturing

let { name: name2, age: age2, gender: gender2 } = account1;

console.log("Tên account1 là :", name2);
console.log("Tuổi account1 là:", age2);
console.log("Gender account1 là : ", gender2);

console.log("===============================================");

// sử dụng toán tử (... =  spread)

let worker = {
  ...account1,
  rank: 10,
};

console.log("Thông tin worker là : ", worker.name, worker.age, worker.address);

console.log(
  "===================================================================="
);
// Thực hiện demo với Array, khai báo 1 mảng bao gồm tên các bạn trong lớp.
let name_Array: String[] = ["Name1", "Name2", "Name3"];
let [Student1, Student2, Student3] = name_Array;
console.log("-------Thông tin tên các sinh viên sau khi destructuring: ");
console.log("Student1: ", Student1);
console.log("Student2: ", Student2);
console.log("Student3: ", Student3);

// Thực hiện tạo thêm 1 mảng mới và thêm 1 số sinh viên nữa:
let name_Array_NEW: String[] = [...name_Array, "Name4", "Name5", "Name6"];
console.log("-----------Thông tin sinh viên trong mảng name_Array_NEW: ");

for (let index = 0; index < name_Array_NEW.length; index++) {
  console.log("Sinh viên ", index + 1, name_Array_NEW[index]);
}
