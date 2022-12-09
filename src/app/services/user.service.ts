import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from "../Errors/ErrorHandler";
import { User } from "../models/User";

@Injectable()
export class UserService {

  errorMessage: string = ''

  userSession: BehaviorSubject<User | null>

  constructor(private http: HttpClient) {
    this.userSession = new BehaviorSubject<User | null>(null)
    if (this.isUserLogged()) this.createLoginSession()
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map(User.from),
        catchError(e => {
          this.errorMessage = ErrorHandler.getMessage(e)
          return [];
        })
      );
  }

  getUserSession(): string {
    return localStorage.getItem('token') || ''
  }

  isUserLogged(): boolean {
    return !!this.getUserSession()
  }

  getUserProfile(): User {
    return new User(10, 'Dmitri', 'ts@mail.test', 'TSC')
  }

  createLoginSession() {
    localStorage.setItem('token', Date.now().toString())
    this.userSession.next(this.getUserProfile())
  }

  logout() {
    localStorage.removeItem('token')
    this.userSession.next(null)
  }
}
