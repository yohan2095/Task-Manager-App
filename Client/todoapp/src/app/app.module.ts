import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './todoapp/parent/parent.component';
import { UsersCompComponent } from './todoapp/users-comp/users-comp.component';
import { Parent2Component } from './todoapp/parent2/parent2.component';
import { MainTaskComponent } from './todoapp/taskandpost/main-task/main-task.component';
import { TasksComponent } from './todoapp/taskandpost/tasks/tasks.component';
import { MainPostComponent } from './todoapp/taskandpost/main-post/main-post.component';
import { PostComponent } from './todoapp/taskandpost/post/post.component';
import { AddTaskComponent } from './todoapp/taskandpost/add-task/add-task.component';
import { AddPostComponent } from './todoapp/taskandpost/add-post/add-post.component';
import { NewuserComponent } from './todoapp/newuser/newuser.component';

const appRoutes : Routes = [{path : 'parent' , component : ParentComponent},
                            {path : 'parent2ID/:userid', component : Parent2Component},
                            {path : 'addTask/:userid', component : AddTaskComponent},
                            {path : 'addPost/:userid', component : AddPostComponent},
                            {path : 'newUser' , component : NewuserComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    UsersCompComponent,
    Parent2Component,
    MainTaskComponent,
    TasksComponent,
    MainPostComponent,
    PostComponent,
    AddTaskComponent,
    AddPostComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
