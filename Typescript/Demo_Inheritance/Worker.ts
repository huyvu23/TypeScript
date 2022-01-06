import { Staff } from "./Staff";

class Worker extends Staff {
  private rank: number;

  constructor(
    name: string,
    age: number,
    gender: string,
    address: string,
    rank: number
  ) {
    super(name, age, gender, address);
    this.rank = rank;
  }

  public getrank(): number {
    return this.rank;
  }

  public setrank(value: number) {
    this.rank = value;
  }

  public printInforWorker() {
    console.log("Thông tin Worker là :");
    super.printInforStaff();
    console.log("Rank : " + this.rank);
  }
}

export { Worker };
