console.log("Tên của nhân viên là: ", name_Staff);
// Tiếp tục các đoạn lệnh khác

// Khai báo biến name_Staff ở đây, chương trình không báo lỗi xảy ra hiện tương Hoisting, nhưng khi này đoạn lệnh console.log ở dòng 1 sẽ trả ra giá trị: undefined
var name_Staff = "Daonq";
// Khi sử dụng với let, đoạn lệnh trên dòng 1 sẽ báo lỗi, không xảy ra hoisting.
// let name_Staff ="Daonq";

// hoisting đưa phần khai báo lên trên đầu
console.log(sum(6, 9));

function sum(a, b) {
  return a + b;
}