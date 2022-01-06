"use strict";
exports.__esModule = true;
var Smartphone_1 = require("./Smartphone");
var smartphone1 = new Smartphone_1.Smartphone("Iphone", 300);
var smartphone2 = new Smartphone_1.Smartphone("Samsung", 250);
var smartphone3 = new Smartphone_1.Smartphone("Sony", 200);
var SmartphoneArray;
SmartphoneArray = [smartphone1, smartphone2, smartphone3];
// suwr dungj arrow
var SmartphoneSale = function (discount) { return function (price) { return price - discount * price; }; };
console.log("Gía sản phẩm sau khi sale 10% là ");
// phần trăm sale , truyền tham số discount vào (0,1)
var SmartphoneSale_10 = SmartphoneSale(0.1);
SmartphoneArray.forEach(function (element) {
    console.log("Tên sản phẩm là :", element.getname());
    console.log("Gía sản phần là :", SmartphoneSale_10(element.getprice()));
});
