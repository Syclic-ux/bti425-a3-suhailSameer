import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogPost!: BlogPost;
  tags: string = "";
  private querySub:any = [];

  constructor(private _postService:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log("Before subscribing " + this.blogPost);
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this._postService.getPostbyId(params['id']).subscribe(
        data => {console.log("The Post-data is " + data);
          this.blogPost = data; 
          this.tags = this.blogPost.tags.toString();
          console.log(this.blogPost);
        },
        err => console.log("Error in Post Data" + err) 
      );
     })
  }

  public onSubmit(){
    console.log(this.blogPost);
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this._postService.updatePostById(this.blogPost._id,this.blogPost).subscribe(
      () => {this.router.navigate(['/admin']); console.log("The post has been updated");}
    );
    //this.router.navigate(['/admin']);
  }

  public deletePost(){
    this._postService.deletePostById(this.blogPost._id).subscribe(
      () => {
        console.log("The post has been deleted");
        this.router.navigate(['/admin']);
      } 
    );
    // console.log("The post has been deleted");
    // this.router.navigate(['/admin']);
  }

}
