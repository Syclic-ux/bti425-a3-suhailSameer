import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDataComponent } from './post-data/post-data.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'post/:id',component:PostDataComponent},
  {path:'admin',component:PostsTableComponent},
  {path:'admin/newPost',component:NewPostComponent},
  {path:'admin/post/:id',component:EditPostComponent},
  {path:'blog',component:BlogComponent},
  {path:'post',component:PostComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
