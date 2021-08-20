import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http : HttpClient) { }

  //GET ALL USERS
  getUsers()
  {
    return this.http.get<User[]>("http://localhost:8000/api/users");
  }

  //GET USER BY ID
  getUser(_id : String)
  {
    return this.http.get<User>("http://localhost:8000/api/users/" + _id);
  }

  //GET TASK BY ID
  getTask(_id : String)
  {
    return this.http.get<Task[]>("http://localhost:8000/api/tasks/" + _id)
  }

  //DELETE USER
  deleteUser(_id : String)
  {
    return this.http.delete("http://localhost:8000/api/users/" + _id);
  }

  //PUT USER
  updateUser(_id : String, user : User)
  {
    return this.http.put("http://localhost:8000/api/users/" + _id, user);
  }

  //POST USER
  createUser(user : User)
  {
    return this.http.post("http://localhost:8000/api/users/", user)
  }

  
}
