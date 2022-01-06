// viết hàm tính phép nhân a,b,c
function multiply(a, b, c) {
  return a * b * c;
}
var result = multiply(1, 2, 3);
console.log(result);
// sử dụng curryng funcion
function multiply_CurryngingFunction(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
var multiply_CurryngingFunction_1 = multiply_CurryngingFunction(1);
var multiply_CurryngingFunction_2 = multiply_CurryngingFunction_1(2);
var multiply_CurryngingFunction_3 = multiply_CurryngingFunction_2(4);
console.log(multiply_CurryngingFunction_3);
