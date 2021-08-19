import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/classes/user';
import { MemoryService } from 'src/app/Utils/memory.service';
import { UtilsService } from '../../Utils/utils.service';
import { Router, Routes } from '@angular/router';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-users-comp',
  templateUrl: './users-comp.component.html',
  styleUrls: ['./users-comp.component.css']
})
export class UsersCompComponent implements OnInit {

  sub : Subscription = new Subscription();

  @Input()
  task : Task[] = [];

  @Input()
  userid : String = "";

  
  @Input()
  user : User =  new User();

  

  showOther : boolean = false;
  showOtherB : boolean = false;

  @Output()
  slctdArea : boolean = false;
  
  isCompletes : boolean = false;

  


  constructor(private srv : UtilsService,private mmry : MemoryService, private router : Router) { }

  ngOnInit(): void {
    this.sub = this.srv.getUser(this.userid).subscribe(data => this.user = data);
    this.isComplete()
  }

  //Delete the selected user and reloads the users
  delete()
  {
    this.sub = this.srv.deleteUser(this.userid).subscribe(status =>
       {
         alert("Deleted");
         this.router.navigate(['/']);
         window.location.reload();
       });
  }

  //Update the seleced user and reloads.
  update()
  {
    this.sub = this.srv.updateUser(this.userid, this.user).subscribe(status =>
       {
         alert("Updated");
         this.router.navigate(['/']);
         window.location.reload();
       });
  }
  
  //Find out if the selected Area is true and if it is, it routes Parent2 on the user datas
  gotoParent2()
  {
    if(this.slctdArea == false)
    {
      this.slctdArea = true;
      sessionStorage["userid"] = this.user._id;
      this.router.navigate(['/parent2ID/' + this.user._id]);
    }
    else if(this.slctdArea == true)
    {
      this.slctdArea = false;
      this.router.navigate(['/']);
    }
  }
  
  //Verifies if all tasks are completed and according to that returns a boolean for each user that defines its color.
  isComplete()
  {
    this.sub = this.srv.getUser(this.userid).subscribe(data => {

      let allcompleted : number = 0;
      
      for(let i = 0; i < this.user.tasks!.length; i++)
      {
        if(this.user.tasks![i].completed == true)
        {
          allcompleted++
        }
      }

      if(allcompleted == this.user.tasks!.length)
      {
        console.log("All tasks are completed");
        return this.isCompletes = true;
      }
      else
      {
        console.log("Not completed")
        return this.isCompletes = false;
      }

    });
  }
  
 
  
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
