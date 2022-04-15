import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags:Array<string> = [];
  // tags: Array<string> =[
  //   "#funny",
  //   "#dramatic",
  //   "#rental",
  //   "#seeagain",
  //   "#spooky",
  //   "#worththecost",
  //   "#lovedIt",
  //   "#scary",
  //   "#silly",
  //   "#good4kidz"
  //  ];

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getTags().subscribe(
      data => {//console.log(data);
        this.tags = data; //console.log(this.tags);
      },
      err => console.log("Error in Categories" + err)
    );
  }

}
