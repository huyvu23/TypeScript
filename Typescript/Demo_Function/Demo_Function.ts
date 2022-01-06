import { Account } from "./Account";

let account = new Account(1, "huy@gmail.com", "huyvu", "vuquanghuy");
let account2 = new Account(2, "huy@gmail2.com", "huyvu2", "vuquanghuy2");
let account3 = new Account(3, "huy@gmail3.com", "huyvu3", "vuquanghuy3");

let AccountArray: Account[];
AccountArray = [account, account2, account3];

// sử dụng arrow funcion = =>
AccountArray.map((acc: Account, key: number) => {
  console.log(key);

  console.log(acc);
});
