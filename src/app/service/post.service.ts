import {Injectable} from '@angular/core';
import {Post} from "../model/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/Image";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  images: Image[] = [];

  // tiêm service:
  constructor(private http: HttpClient) {
  }

//  nạp đạn bên service:
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:8080/posts")
  }

  save(post: { account: { id: number }; content: any }): Observable<Post> {
    return this.http.post<Post>("http://localhost:8080/posts", post)
  }
  delete(id:number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/posts/"+id);
  }
  findPostById(id: number): Observable<Post> {
    return this.http.get<Post>("http://localhost:8080/posts/"+id);
  }


}
