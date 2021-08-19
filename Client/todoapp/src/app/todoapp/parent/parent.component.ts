import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sub : Subscription = new Subscription();

  userid : String = "";

  @Output()
  users : User[] = [];

  findUser : string = "";

  @Input()
  slctdArea : boolean = true;

 

  constructor(private srv : UtilsService, private router : Router) { }

  ngOnInit(): void {
    this.sub = this.srv.getUsers().subscribe( (data : User[]) => this.users = data)
  }

  search(usr : User) : boolean
  {
    let name = usr.name?.toLowerCase();
    let email = usr.email?.toLowerCase();
    
    if(name?.includes(this.findUser.toLowerCase()) || email?.includes(this.findUser.toLowerCase()))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  gotoNewUser()
  {
      this.router.navigate(['/newUser/']);
  }
  
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
