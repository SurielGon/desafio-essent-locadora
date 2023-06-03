import { User } from "@prisma/client";

export interface IRegisterUser extends Omit<User, 'id'> {}