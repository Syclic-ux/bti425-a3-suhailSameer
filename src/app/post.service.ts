import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError,of } from 'rxjs';
import { catchError } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private api = "https://bti-425-api.herokuapp.com";
  private api = "https://bti-425-api.herokuapp.com";
  private perPage:number = 6;
  private path = "";

  constructor(private http:HttpClient) { }

  getPosts(page:number,tag:string | null,category:string | null): Observable<BlogPost[]>{
    console.log(tag);
    console.log(category);
    this.path = this.api + "/api/posts?page="+ page +"&perPage=" + this.perPage;
    if(tag != null) this.path = this.path + "&tag=" + tag;
    if(category != null) this.path = this.path + "&category=" + category;
    
    return this.http.get<BlogPost[]>(this.path);
  }

  getAllPosts():Observable<BlogPost[]>{
    this.path = this.api + "/api/posts?page=1&perPage=" + Number.MAX_SAFE_INTEGER;

    return this.http.get<BlogPost[]>(this.path);
  }

  getPostbyId(id:string): Observable<BlogPost>{
    console.log("id in service " + id)
    this.path = this.api + "/api/posts/" + id;
    console.log(this.http.get<BlogPost>(this.path));
    return this.http.get<BlogPost>(this.path);
  }

  getCategories(): Observable<any>{
    this.path = this.api + "/api/categories";
    return this.http.get<any>(this.path);
  }

  getTags(): Observable<string[]>{
    this.path = this.api + "/api/tags";
    return this.http.get<string[]>(this.path);
  }

  newPost(data: BlogPost): Observable<any>{
    this.path = this.api + "/api/posts";
    return this.http.post<any>(this.path, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    //this.path = this.api + "/api/posts/${id}";
    console.group("The ID to be updated is " + id);
    return this.http.put<any>(this.api + "/api/posts/" + data._id, data);
  }

  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(this.api + "/api/posts/" +`${id}`);
  }

}
