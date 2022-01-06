class Department {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getid(): number {
    return this.id;
  }

  public getname(): string {
    return this.name;
  }

  public setid(value: number) {
    this.id = value;
  }

  public setname(value: string) {
    this.name = value;
  }

  public printDepartment1() {
    console.log("ID:" + this.id + "Name:" + this.name);
  }
}

//                          (tên biến : kiểu dữ liệu)
function printDepartment(department: Department) {
  console.log("ID:" + department.getid() + "Name:" + department.getname());
}

export { Department, printDepartment };
