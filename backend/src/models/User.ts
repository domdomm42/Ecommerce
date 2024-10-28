class User {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  set email(email: string) {
    this._email = email;
  }

  set password(password: string) {
    this._password = password;
  }

  introduce() {
    console.log(`Hi I am ${this._name}`);
  }
}

export default User;
