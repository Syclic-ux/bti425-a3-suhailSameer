import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts-component',
  templateUrl: './footer-posts-component.component.html',
  styleUrls: ['./footer-posts-component.component.css']
})
export class FooterPostsComponentComponent implements OnInit {

  //@Input('post')
  //Post!:BlogPost[];
  Post!:Array<BlogPost>;

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getPosts(1,null,null).subscribe(
      data => {//console.log(data);
        this.Post = data.slice(0,3); //console.log(this.Post);
      },
      err => console.log("Error in Latest Posts" + err)
    );
  }

}
