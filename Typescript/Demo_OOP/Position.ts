class Position {
  private id: number;
  private name: String;

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }

  public getid(): number {
    return this.id;
  }

  public getname(): String {
    return this.name;
  }

  public setid(value: number) {
    this.id = value;
  }

  public setname(value: String) {
    this.name = value;
  }
}

export { Position };
