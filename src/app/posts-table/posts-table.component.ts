import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];

  constructor(private _postService:PostService, private router:Router) { }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(
      data =>{
        console.log("All blogs from table" + data);
        this.blogPosts = data;
      },
    );
  }

}
