let numArray = [10, 20, 30];

// Sử dụng vòng for để tính các giá trị trong mảng
let total = 0;

numArray.forEach((element) => {
  total = element + total;
});

//   accumulator :  tích lũy
//  currentValue : giá trị hiện tại, là giá trị mỗi vòng  lặp
//  currentIndex : số phần tử hiện tại

// 0 là giá trị tích lũy ban đầu
let total_reduce = numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total_reduce);
