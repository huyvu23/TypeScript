// viết hàm tính phép nhân a,b,c
function multiply(a, b, c) {
  return a * b * c;
}

var result = multiply(1, 2, 3);
console.log(result);

// sử dụng curryng funcion ==> Trường hợp đặc biệt của HOF

function multiply_CurryngingFunction(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

// <==> ARROW FUNTION
var multiply_CurryngingFunction_Arroww = (a) => (b) => (c) => a * b * c;

var multiply_CurryngingFunction_1 = multiply_CurryngingFunction(1);
var multiply_CurryngingFunction_2 = multiply_CurryngingFunction_1(2);
var multiply_CurryngingFunction_3 = multiply_CurryngingFunction_2(4);

console.log(multiply_CurryngingFunction_3);
