import { Department } from "./Department";
import { Position } from "./Position";

class Account {
  private id: number;
  private email: string;
  private username: string;
  private fullname: string;
  private department: Department;
  private position: Position;
  private createDate: Date;

  constructor(
    id: number,
    email: string,
    username: string,
    fullname: string,
    department: Department,
    position: Position,
    createDate: Date
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.fullname = fullname;
    this.department = department;
    this.position = position;
    this.createDate = createDate;
  }

  public getid(): number {
    return this.id;
  }

  public getemail(): string {
    return this.email;
  }

  public getusername(): string {
    return this.username;
  }

  public getfullname(): string {
    return this.fullname;
  }

  public getdepartment(): Department {
    return this.department;
  }

  public getposition(): Position {
    return this.position;
  }

  public getcreateDate(): Date {
    return this.createDate;
  }

  public setid(value: number) {
    this.id = value;
  }

  public setemail(value: string) {
    this.email = value;
  }

  public setusername(value: string) {
    this.username = value;
  }

  public setfullname(value: string) {
    this.fullname = value;
  }

  public setdepartment(value: Department) {
    this.department = value;
  }

  public setposition(value: Position) {
    this.position = value;
  }

  public setcreateDate(value: Date) {
    this.createDate = value;
  }
}
