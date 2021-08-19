import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryService } from 'src/app/Utils/memory.service';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  task : Task = new Task();

  sub : Subscription = new Subscription();

  constructor(private mmry : MemoryService) { }

  ngOnInit(): void {
  }

  //If activated, changes task.completed to true and updates it on the DB
  markCompleted(taskid : String)
  {
    this.task.completed = true;
    this.sub = this.mmry.putTask(taskid, this.task).subscribe(data => {
      let userid = sessionStorage.getItem('userid')!;
      this.mmry.taskCmpltd(userid, this.task._id!);
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
