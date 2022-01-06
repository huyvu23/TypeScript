var numArray = [10, 20, 30];
// Sử dụng vòng for để tính các giá trị trong mảng
var total = 0;
numArray.forEach(function (element) {
    total = element + total;
});
var total_reduce = numArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(total_reduce);
