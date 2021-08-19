import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {

  @Input()
  userTasks : Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
