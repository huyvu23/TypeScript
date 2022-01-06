class Account {
  private id: number;
  private email: string;
  private username: string;
  private fullname: string;

  constructor(id: number, email: string, username: string, fullname: string) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.fullname = fullname;
  }
}

export { Account };
