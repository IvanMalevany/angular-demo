import { ErrorList } from "../Errors/ErrorHandler";
import { INews } from "../interfaces/INews";

export class News implements INews {
  static maxIntroLength: number = 50

  constructor(
    public id: number,
    public title: string,
    public body: string,
    public userId: number
  ) {}

  static from(data: any): News {
    if (data && data.id && data.title && data.body && data.userId) {
      return new News(data.id, data.title, data.body, data.userId)
    }
    throw Error(ErrorList.dataNotValid)
  }

  get intro(): string {
    return this.body.length > News.maxIntroLength? `${this.body.slice(0, News.maxIntroLength)}...` : this.body
  }
}
