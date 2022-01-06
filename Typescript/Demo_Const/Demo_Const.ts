console.log("---------------- Demo số PI với Primative: ");
const PI = 3.14;
console.log("Giá trị số PI là: " + PI);
// Bây giờ sẽ thay đổi giá trị số PI
// PI = 3; không thể gán lai giá trị, sẽ báo lỗi.
// khi thực hiện khai báo với const chú ý cần gán giá trị ngay khi khai báo nếu không sẽ báo lỗi
// const Create_date;
// Create_date = " ";

console.log("---------------- Const với đối tượng: ");
// Có thể thay đổi thuộc tính của đối tượng, nhưng không gán lại toàn bộ đối tượng được.
const account = {
  name: "daonq",
  age: 20,
  gender: "Nam",
  address: "HN",
};
//  in thông tin đối tượng vừa khai báo
console.log("----------Thông tin Account: ", account);
// Thực hiện thay đổi thuộc tính của Account.
account.name = "daonq_Change";
account.age = 30;
console.log("----------Thông tin Account sau khi thay đổi: ", account);

// Bây giờ gán lại giá trị mới cho đối tượng account
// Không thể gán lại được, sẽ báo lỗi trong chương trình.
// account = {
//     name: "daonq1",
//     age: 22,
//     gender: "Nam",
//     address: "HN",
// }
