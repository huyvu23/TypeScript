"use strict";
exports.__esModule = true;
var Account_1 = require("./Account");
var account = new Account_1.Account(1, "huy@gmail.com", "huyvu", "vuquanghuy");
var account2 = new Account_1.Account(2, "huy@gmail2.com", "huyvu2", "vuquanghuy2");
var account3 = new Account_1.Account(3, "huy@gmail3.com", "huyvu3", "vuquanghuy3");
var AccountArray;
AccountArray = [account, account2, account3];
// sử dụng arrow funcion = =>
AccountArray.map(function (acc, key) {
    console.log(key);
    console.log(acc);
});
