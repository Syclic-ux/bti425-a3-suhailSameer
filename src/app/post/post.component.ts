import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  uri:string = "mongodb+srv://dbUser:Suhail!234@senecaweb.lswxd.mongodb.net/blog-suhailSameer?retryWrites=true&w=majority";

  blogPosts: Array<BlogPost> = blogData;

  constructor() { }

  ngOnInit(): void {
  }

}
