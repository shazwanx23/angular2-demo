import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { ListComponent }  from './components/list/list.component';
import { ViewComponent }  from './components/view/view.component';
import { PostComponent }  from './components/post/post.component';
import { ViewPostComponent }  from './components/view-post/view-post.component';

import { PostService } from './services/post/post.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'view', component: ViewComponent
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: 'post/:id', component: ViewPostComponent
  }
]

@NgModule({
  imports:      [ BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            RouterModule.forRoot(routes)
             ],
  declarations: [ AppComponent,
            HomeComponent,
            ListComponent,
            ViewComponent,
            PostComponent,
            ViewPostComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
