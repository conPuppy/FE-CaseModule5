import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";
import {ImageService} from "../../service/image.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
    this.postForm = new FormGroup({
      content: new FormControl(""),
      img: new FormControl(""),
    })
  }
  postForm!: FormGroup;



  constructor(private postService : PostService, private router: Router, private imageService: ImageService) {

  }

  onSubmit() {
    const post = {
      account: { id: 1},
      content: this.postForm.controls["content"].value
    }

    this.postService.save(post).subscribe(data=>{
      const image = {
        img: this.postForm.controls["img"].value,
        post: {
          id: data.id
        }
      }
      this.imageService.saveImg(image).subscribe(data=>{
        console.log(data)
      })
      window.location.reload();
    })
  }

}
