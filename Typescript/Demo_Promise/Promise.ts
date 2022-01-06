// resolve trả về khi call API thành công
// Reject trả về khi callAPI thất bại
let promise_API = new Promise(function (resolve, reject) {
  var data = false;
  if (data) {
    resolve("Email chưa tồn tại");
  } else {
    reject("Email đã tồn tại trên hệ thống");
  }
});

promise_API.then(
  // nếu resolve thực hiện đoạn lệnh này
  function (success) {
    console.log(success);
  },
  // nếu reject sẽ thực hiện đoạn này
  function (error) {
    console.log(error);
  }
);
