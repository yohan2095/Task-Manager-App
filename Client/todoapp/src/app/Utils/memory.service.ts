import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Task } from '../classes/task';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  MemoryUser : User[] = []

  constructor( private http : HttpClient) { }
  
  //SAVE USER DATA
  saveUserMemory(users : User[]){
    this.MemoryUser = users
  }

  //GET USER SAVE
  getUserMemory(){
    return this.MemoryUser;
  }

  //DELETE USER SAVE
  deleteUserMemory(userId : String){
    const allUsers = this.MemoryUser;
    const crntUserIndex = this.MemoryUser.findIndex((user:User)=> user._id === userId);
    allUsers.splice(crntUserIndex , 1)
    this.MemoryUser = allUsers;

  }

  //ADD USER DATA
  addUserMemory(user : User){
    let usersArr= this.MemoryUser;
    usersArr.push(user);
    this.MemoryUser = usersArr;
  }

  //PUT TASK
  putTask(taskid : String, task : Task)
  {
    return this.http.put("http://localhost:8000/api/tasks/" + taskid, task)
  }

  //POST TASK
  postTask(userid : String, taskObj : Task)
  {
    return this.http.post("http://localhost:8000/api/tasks/" + userid, taskObj)
  }

  //POST POST
  postPost(userid : String, postObj : Post)
  {
    return this.http.post("http://localhost:8000/api/posts/" + userid, postObj)
  }

  //UPDATE COMPLETED TASK STATUS
  taskCmpltd(userid : String, taskid : String)
  {
    let usersArr = this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User) => user._id == userid);
    usersArr[crntUser].tasks!.find((x : Task) => x._id == taskid)!.completed! = true;
    this.MemoryUser = usersArr;
  }
  
  //SAVE TASK DATA
  addTaskMemory(userId : String , newTask : Task){
    let usersArr= this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].tasks!.push(newTask)
    this.MemoryUser = usersArr
  }
  
  //SAVE POST DATA
  addPostMemory(userId : String , newPost : Post){
    let usersArr= this.MemoryUser;
    let crntUser = usersArr.findIndex((user : User)=> user._id === userId);
    usersArr[crntUser].posts?.push(newPost)
    this.MemoryUser = usersArr
  }
}
