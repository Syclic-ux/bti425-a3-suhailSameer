import { Component, OnInit } from '@angular/core';
//import blogData from '../blogData.json';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  
  private page:number = 1;
  private tag:string | null = null;
  private category:string | null= null;
  private querySub:any = [];

  constructor(private _postService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']){
        this.tag = params['tag'];
        this.category = null;
      }else{
        this.tag = null;
      }
      if(params['category']){
        this.category = params['category'];
        this.tag = null;
      }else{
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
     });
    //console.log(this.blogPosts);
  }

  getPage(num:number){
    this._postService.getPosts(num,this.tag,this.category).subscribe(
        data => this.blogPosts = data,
        err => console.log("Blog Component has caused error" + err)
    );
  }

  ngOnDestroy():void{
    if(this.querySub) this.querySub.unsubscribe();
  }

}
