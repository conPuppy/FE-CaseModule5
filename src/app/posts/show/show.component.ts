import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/Post";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";
import {ImageService} from "../../service/image.service";
import {Image} from "../../model/Image";
import {CommentService} from "../../service/comment.service";
import {Comment} from "../../model/Comment";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  posts: Post[] = [];
  images: Image[] = [];
  comments: Comment[] = [];

  constructor(private postService: PostService, private imageService: ImageService, private router: Router, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      this.imageService.getAllImg().subscribe(data => {
        this.images = data;
        console.log(data)
      })
      this.getAllComment();
    })
  }

  getAllComment() {
    this.commentService.getAllCmt().subscribe(data => {
      this.comments = data;
      console.log(data);
    })
  }

  deletePost(id: number) {
    this.imageService.deleteImgByPost(id).subscribe(data=>{
      this.commentService.deleteCmtByPost(id).subscribe(data=>{
        this.postService.delete(id).subscribe(data=>{
          window.location.reload();
        })
      })
    })
  }

}
