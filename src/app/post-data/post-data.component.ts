import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { BlogPost } from '../BlogPost';
import {Comment} from '../Comment';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  private temp:Comment =new Comment();
  private querySub:any = [];
  commentName:string = "";
  commentText:string = "";

  //@Input('post')
  Post!: BlogPost;

  constructor(private _postService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Before subscribing " + this.Post);
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this._postService.getPostbyId(params['id']).subscribe(
        data => {console.log("The Post-data is " + data);
          this.Post = data; console.log(this.Post);
        },
        err => console.log("Error in Post Data" + err) 
      );
     })
  }

  public submitComment(){
    this.temp.author = this.commentName;
    this.temp.comment = this.commentText;
    this.temp.date = new Date().toLocaleDateString();

    this.Post.comments.push(this.temp);

    this._postService.updatePostById(this.Post._id,this.Post).subscribe(
      () => {this.commentName = "";this.commentText = "";}
    );
  }

  ngOnDestroy():void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
