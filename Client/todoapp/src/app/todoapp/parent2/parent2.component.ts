import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/classes/user';
import { UtilsService } from '../../Utils/utils.service';
import { MemoryService } from 'src/app/Utils/memory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  @Output()
  userData : User = {};

  @Input()
  user : User =  new User();

  sub : Subscription = new Subscription();

  users : User[] = [];

  @Input()
  userid : String = "";

  addTask : boolean = false;

  
  

  constructor(private srv : UtilsService, private mmry : MemoryService, private acr : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.sub = this.srv.getUsers().subscribe( (data : User[]) => this.users = data);
    
    this.acr.params.subscribe(data => {
      this.users = this.mmry.getUserMemory()
      this.getUserData(data['userid'])
    })
  }

  gotoAddTask()
  {
      sessionStorage["userid"] = this.userData._id;
      this.router.navigate(['/addTask/' + this.userData._id]);
  }

  gotoAddPost()
  {
      sessionStorage["userid"] = this.userData._id;
      this.router.navigate(['/addPost/' + this.userData._id]);
  }

  //Get user by id
  getUserData(id: string)
  {
    this.sub = this.srv.getUser(id).subscribe(data => this.userData = data);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
