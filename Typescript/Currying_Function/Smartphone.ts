class Smartphone {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getname(): string {
    return this.name;
  }

  public getprice(): number {
    return this.price;
  }

  public setname(value: string) {
    this.name = value;
  }

  public setprice(value: number) {
    this.price = value;
  }
}

export { Smartphone };
