import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Task } from './task';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  MemoryUser : User[] = []

  constructor( private http : HttpClient) { }
  
  saveUserMemory(users : User[]){
    this.MemoryUser = users
  }

  getUserMemory(){
    return this.MemoryUser;
  }

  deleteUserMemory(userId : String){
    const allUsers = this.MemoryUser;
    const crntUserIndex = this.MemoryUser.findIndex((user:User)=> user._id === userId);
    allUsers.splice(crntUserIndex , 1)
    this.MemoryUser = allUsers;

  }

  addUserMemory(user : User){
    let usersArr= this.MemoryUser;
    usersArr.push(user);
    this.MemoryUser = usersArr;
  }

  putTask(taskid : String, task : Task)
  {
    return this.http.put("http://localhost:8000/api/tasks/" + taskid, task)
  }

  postTask(userid : String, taskObj : Task)
  {
    return this.http.post("http://localhost:8000/api/tasks/" + userid, taskObj)
  }

  postPost(userid : String, postObj : Post)
  {
    return this.http.post("http://localhost:8000/api/posts/" + userid, postObj)
  }

  

  taskCmpltd(userid : String, taskid : String)
  {
    let usersArr = this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User) => user._id == userid);
    usersArr[crntUser].tasks!.find((x : Task) => x._id == taskid)!.completed! = true;
    this.MemoryUser = usersArr;
  }
  
  addTaskMemory(userId : String , newTask : Task){
    let usersArr= this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].tasks!.push(newTask)
    this.MemoryUser = usersArr
  }
  
  addPostMemory(userId : String , newPost : Post){
    let usersArr= this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].posts?.push(newPost)
    this.MemoryUser = usersArr
  }
}
