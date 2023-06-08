import { User } from '@prisma/client';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoggedUser extends Omit<User, 'password'> {}

export interface ILoginAuthorized {
  user?: ILoggedUser;
  acessToken?: string;
}
