import { ErrorList } from "../Errors/ErrorHandler";
import { IUser } from "../interfaces/IUser";

export class User implements IUser {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public company: string
  ) {}

  static from(data: any): User {
    if (data && data.id && data.name && data.email && data.company) {
      return new User(data.id, data.name, data.email, data.company)
    }
    throw Error(ErrorList.dataNotValid)
  }

}
