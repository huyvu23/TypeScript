function Call_API_Email() {
  return new Promise(function (resolve, reject) {
    console.log("Call API Email");
    var data = false;
    if (data) {
      reject("Email đã tồn tại");
    } else {
      resolve("Email chưa tồn tại ,mời tạo tiếp");
    }
  });
}

function Call_API_UserName() {
  return new Promise(function (resolve, reject) {
    console.log("Call API UserName");
    var data = false;
    if (data) {
      reject("UserName đã tồn tại");
    } else {
      resolve("UserName chưa tồn tại ,mời tạo tiếp");
    }
  });
}

function Call_API_CreateAccount() {
  return new Promise(function (resolve, reject) {
    console.log("Call API Create Account");
    var status = "success";
    if (status == "Error") {
      reject("Account đã tồn tại");
    } else {
      resolve("Taọ thành công");
    }
  });
}

Call_API_Email()
  .then(function (message) {
    console.log(message);
    return Call_API_UserName();
  })
  .then(function (message) {
    console.log(message);
    return Call_API_CreateAccount();
  })
  .then(function (message) {
    console.log(message);

    return message;
  })
  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);
  });
