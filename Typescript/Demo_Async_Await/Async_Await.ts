// kiểu này tương đương Promise
// 	Async/await là cách mới để xử lý các đoạn code bất đồng bộ.
async function CallAPI_Check_Email() {
  console.log("Call API CHECK EMAIL ....."); // dòng này có nghĩa đang call API về SEVER BACKEND
  var data = false;
  return data;
}

async function CallAPI_Check_UserName() {
  console.log("Call API CHECK USERNAME.....");
  var data = false;
  return data;
}

async function CallAPI_Create_Account() {
  console.log("Create success");
  var status = "OK"; // trạng thái trả về của backend, nếu tạo thành công trả về true
  if (status == "OK") {
    return true;
  } else {
    return false;
  }
}
// Bất cứ hàm nào gặp lỗi sẽ dừng chương trình
async function Create_Account() {
  var result = await CallAPI_Check_Email();
  if (result) {
    return;
  } else {
    console.log(" Emails exists");
  }
  
  var result2 = await CallAPI_Check_UserName();
  if (result2) {
    return;
  } else {
    console.log(" UserName exists");
  }
  var result3 = await CallAPI_Create_Account();
  if (result3) {
    return;
  } else {
    console.log(" Account exists");
  }
}

Create_Account();
