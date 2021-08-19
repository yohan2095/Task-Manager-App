import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MemoryService } from 'src/app/memory.service';
import { Post } from 'src/app/post';
import { User } from 'src/app/user';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output()
  userData : User = {};

  users : User[] = [];

  newPost : Post = {title : "", body : ""}

  sub : Subscription = new Subscription();

  constructor(private acr : ActivatedRoute, private router : Router, private srv : UtilsService, private mmry : MemoryService) { }

  

  ngOnInit(): void {
    this.sub = this.srv.getUsers().subscribe( (data : User[]) => this.users = data);
    
    this.acr.params.subscribe(data => {
      this.users = this.mmry.getUserMemory()
      this.getUserData(data['userid'])
    })
  }

  addPost(isValid : Boolean, userid : String)
  {
    if(isValid == true)
    {
      this.sub = this.mmry.postPost(this.userData._id!, this.newPost).subscribe(data => {
        alert(data)
        this.mmry.addPostMemory(userid, this.newPost)
        this.sub = this.srv.getUser(userid.toString()).subscribe(data => this.userData = data)
      })
    }
    else
    {
      alert("title or body cannot be blank")
    }
    this.goBack()
  }

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
