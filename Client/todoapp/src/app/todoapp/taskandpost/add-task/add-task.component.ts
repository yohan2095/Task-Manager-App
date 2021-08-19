import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MemoryService } from 'src/app/Utils/memory.service';
import { User } from 'src/app/classes/user';
import { Task } from 'src/app/classes/task';
import { UtilsService } from '../../../Utils/utils.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output()
  userData : User = {};

  users : User[] = [];

  newTask : Task = {title : '', completed : false}

  sub : Subscription = new Subscription();

  constructor(private acr : ActivatedRoute, private router : Router, private srv : UtilsService, private mmry : MemoryService) { }

  

  ngOnInit(): void {
    this.sub = this.srv.getUsers().subscribe( (data : User[]) => this.users = data);
    
    this.acr.params.subscribe(data => {
      this.users = this.mmry.getUserMemory()
      this.getUserData(data['userid'])
    })
  }

  //Posting a new task according to the user ID
  addTask(isValid : Boolean, userid : String)
  {
    if(isValid == true)
    {
      this.mmry.postTask(this.userData._id!, this.newTask).subscribe(data => {
        this.mmry.addTaskMemory(userid, data as Task)
        this.sub = this.srv.getUser(userid).subscribe(data => this.userData = data)
      })
    }
    else
    {
      alert("title cannot be blank")
    }
    this.goBack()
  }

  //Get user by ID.
  getUserData(id: string)
  {
    this.sub = this.srv.getUser(id).subscribe(data => this.userData = data);
  }

  goBack()
  {
      sessionStorage["userid"] = this.userData._id;
      this.router.navigate(['/parent2ID/' + this.userData._id]);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
  
}
