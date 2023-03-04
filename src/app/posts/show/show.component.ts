import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/Post";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";
import {ImageService} from "../../service/image.service";
import {Image} from "../../model/Image";
import {CommentService} from "../../service/comment.service";
import {Comment} from "../../model/Comment";
import {FormControl, FormGroup} from "@angular/forms";

// declare var $: JQuery;
declare var jQuery: JQueryStatic;

import * as $ from 'jquery';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  // c = jQuery("#content").val("aaa");
  posts: Post[] = [];
  images: Image[] = [];
  comments: Comment[] = [];
  post: Post | undefined;
  editForm: FormGroup = new FormGroup({
    content: new FormControl(),
    img: new FormControl(),
  })

  constructor(private postService: PostService, private imageService: ImageService, private router: Router, private commentService: CommentService) {
  }

  showEdit(id: number) {
    this.postService.findPostById(id).subscribe(data => {
      this.post = data;
      this.editForm.get("content")?.setValue(this.post.content);
      this.imageService.findImgByPost(id).subscribe(data => {
        this.images = data;
        this.ngOnInit();
      })
    })


  }

  edit() {

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
    this.imageService.deleteImgByPost(id).subscribe(data => {
      this.commentService.deleteCmtByPost(id).subscribe(data => {
        this.postService.delete(id).subscribe(data => {
          window.location.reload();
        })
      })
    })
  }

}
