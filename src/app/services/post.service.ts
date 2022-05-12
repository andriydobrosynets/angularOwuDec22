import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient : HttpClient) {
  }
  getPosts(): Observable<IPost[]> {
    return this
      .httpClient
      .get<any[]>(this.url)

  }
  getPost(id:number): Observable<IPost> {
    return this
      .httpClient
      .get<any>(this.url+'/'+id)

  }
}
