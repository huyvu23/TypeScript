import { Staff } from "./Staff";

class Employee extends Staff {
  private task: String;
  constructor(
    name: string,
    age: number,
    gender: string,
    address: string,
    task: string
  ) {
    super(name, age, gender, address);
    this.task = task;
  }

  public gettask(): String {
    return this.task;
  }

  public settask(value: String) {
    this.task = value;
  }

  public printInforEmployee() {
    console.log("Thông tin Employee là :");
    super.printInforStaff();
    console.log("task :" + this.task);
  }
}

export { Employee };
