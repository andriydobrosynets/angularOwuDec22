import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://jsonplaceholder.typicode.com/users'
  constructor(private httpClient : HttpClient) {
  }
  getUsers(): Observable<IUser[]> {
    return this
      .httpClient
      .get<any[]>(this.url)

  }
  getUser(id:number): Observable<IUser> {
    return this
      .httpClient
      .get<any>(this.url+'/'+id)

  }
}
