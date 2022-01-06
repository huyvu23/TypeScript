import { Staff } from "./Staff";

class Engineer extends Staff {
  private specialized: string;
  constructor(
    name: string,
    age: number,
    gender: string,
    address: string,
    specialized: string
  ) {
    super(name, age, gender, address);
    this.specialized = specialized;
  }

  public getspecialized(): string {
    return this.specialized;
  }

  public setspecialized(value: string) {
    this.specialized = value;
  }

  public printInforEngineer() {
    console.log("Thông tin Engineer là :");
    super.printInforStaff();
    console.log("specialized:" + this.specialized);
  }
}

export { Engineer };
