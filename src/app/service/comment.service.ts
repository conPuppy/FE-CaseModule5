import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/Image";
import {Comment} from "../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getAllCmt(): Observable<Comment[]> {
    return this.http.get<Comment[]>("http://localhost:8080/comments");
  }
  deleteCmtByPost(id: number) :Observable<void> {
    return this.http.delete<void>("http://localhost:8080/comments/"+id);
  }
}
