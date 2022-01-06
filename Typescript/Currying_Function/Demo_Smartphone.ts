import { Smartphone } from "./Smartphone";

let smartphone1 = new Smartphone("Iphone", 300);
let smartphone2 = new Smartphone("Samsung", 250);
let smartphone3 = new Smartphone("Sony", 200);

let SmartphoneArray: Smartphone[];
SmartphoneArray = [smartphone1, smartphone2, smartphone3];

// suwr dungj arrow
var SmartphoneSale = (discount) => (price) => price - discount * price;

console.log("Gía sản phẩm sau khi sale 10% là ");
// phần trăm sale , truyền tham số discount vào (0,1)
var SmartphoneSale_10 = SmartphoneSale(0.1);

SmartphoneArray.forEach((element) => {
  console.log("Tên sản phẩm là :", element.getname());
  console.log("Gía sản phần là :", SmartphoneSale_10(element.getprice()));
});
