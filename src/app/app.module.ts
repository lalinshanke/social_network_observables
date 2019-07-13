import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { MainContentSectionComponent } from './main-content-section/main-content-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { FormsModule } from '@angular/forms';
import { PostHeaderComponent } from './main-content-section/post-header/post-header.component';
import { PostTypeComponent } from './main-content-section/post-type/post-type.component';
import { CommentLeve1Component } from './main-content-section/comment-level/comment-leve1.component';
import { SubComment1Component } from './main-content-section/comment-level/sub-comment1/sub-comment1.component';
import { SubComment2Component } from './main-content-section/comment-level/sub-comment1/sub-comment2/sub-comment2.component';
import { ImageTypeComponent } from './main-content-section/post-type/image-type/image-type.component';
import { ContentTypeComponent } from './main-content-section/post-type/content-type/content-type.component';
import { PollTypeComponent } from './main-content-section/post-type/poll-type/poll-type.component';
import { PostLikesComponent } from './main-content-section/post-type/post-likes/post-likes.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HeaderSectionComponent,
      LeftSectionComponent,
      MainContentSectionComponent,
      RightSectionComponent,
      PostHeaderComponent,
      PostTypeComponent,
      CommentLeve1Component,
      SubComment1Component,
      SubComment2Component,
      ImageTypeComponent,
      ContentTypeComponent,
      PollTypeComponent,
      PostLikesComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
