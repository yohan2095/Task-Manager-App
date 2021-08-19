import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MemoryService } from 'src/app/memory.service';
import { User } from 'src/app/user';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  newUser : User = {name : "" , email : ""};

  sub : Subscription = new Subscription();

  constructor(private acr : ActivatedRoute, private router : Router, private srv : UtilsService, private mmry : MemoryService) { }

  ngOnInit(): void {
  }

  goBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(f : NgForm)
  {
    if(f.valid == true)
    {
      this.sub = this.srv.createUser(this.newUser).subscribe(data => {
        this.mmry.addUserMemory(data as User);
        this.router.navigate(['/']);
      })
    }
  }


}
