import { ErrorList } from "../Errors/ErrorHandler";
import { IComment } from "../interfaces/IComment";

export class Comment implements IComment {

  constructor(
    public id: string,
    public name: string,
    public body: string
  ) {}

  static from(data: any): Comment {
    if (data && data.id && data.name && data.body) {
      return new Comment(data.id, data.name, data.body)
    }
    throw Error(ErrorList.dataNotValid)
  }
}
