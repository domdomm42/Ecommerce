interface IUser extends IObject {
  name: string;
  email: string;
  password: string;
}

interface IBusiness extends IUser {
  businessCode: string;
}
