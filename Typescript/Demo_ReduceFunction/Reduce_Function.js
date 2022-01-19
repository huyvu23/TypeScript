var numArray = [10, 20, 30];
// Sử dụng vòng for để tính các giá trị trong mảng
var total = 0;
numArray.forEach(function (element) {
    total = element + total;
});
//   accumulator :  tích lũy
//  currentValue : giá trị hiện tại, là giá trị mỗi vòng  lặp
//  currentIndex : số phần tử hiện tại
// 0 là giá trị tích lũy ban đầu
var total_reduce = numArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(total_reduce);
