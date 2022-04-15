import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost;
  tags: string = "";
  private querySub:any = [];

  constructor(private _postService:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log(this.blogPost);
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Student";
    this.blogPost.views = 0;
    this._postService.newPost(this.blogPost).subscribe(
      () => this.router.navigate(['/admin'])
    );
    //this.router.navigate(['/admin']);
  }

}
