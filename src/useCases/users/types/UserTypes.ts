export interface IUser {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface INewUser extends IUser {
  password: string;
  passwordConfirmation: string;
}
