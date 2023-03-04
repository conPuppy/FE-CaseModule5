import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/Post";
import {Image} from "../model/Image";
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  getAllImg(): Observable<Image[]> {
    return this.http.get<Image[]>("http://localhost:8080/images");
  }

  saveImg(image: { img: any; post: { id: number } }): Observable<Image> {
    return this.http.post<Image>("http://localhost:8080/images",image);
  }
  deleteImgByPost(id: number) :Observable<void> {
    return this.http.delete<void>("http://localhost:8080/images/"+id);
  }
  findImgByPost(idPost : number) :Observable<Image[]> {
    return this.http.get<Image[]>("http://localhost:8080/images/"+idPost);
  }

}
