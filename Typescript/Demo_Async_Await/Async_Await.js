var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// kiểu này tương đương Promise
// 	Async/await là cách mới để xử lý các đoạn code bất đồng bộ.
function CallAPI_Check_Email() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Call API CHECK EMAIL ....."); // dòng này có nghĩa đang call API về SEVER BACKEND
        var data = false;
        return data;
    });
}
function CallAPI_Check_UserName() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Call API CHECK USERNAME.....");
        var data = false;
        return data;
    });
}
function CallAPI_Create_Account() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Create success");
        var status = "OK"; // trạng thái trả về của backend, nếu tạo thành công trả về true
        if (status == "OK") {
            return true;
        }
        else {
            return false;
        }
    });
}
// Bất cứ hàm nào gặp lỗi sẽ dừng chương trình
function Create_Account() {
    return __awaiter(this, void 0, void 0, function* () {
        var result = yield CallAPI_Check_Email();
        if (result) {
            return;
        }
        else {
            console.log(" Emails exists");
        }
        var result2 = yield CallAPI_Check_UserName();
        if (result2) {
            return;
        }
        else {
            console.log(" UserName exists");
        }
        var result3 = yield CallAPI_Create_Account();
        if (result3) {
            return;
        }
        else {
            console.log(" Account exists");
        }
    });
}
Create_Account();
