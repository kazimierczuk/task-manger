import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {TaskManagerConfigurationService} from "./task-manager-configuration.service";
import {TaskManagerService} from "./task-manager.service";
import {Task} from './task-manager.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskManagerConfiguration: TaskManagerConfigurationService, private taskManagerService: TaskManagerService, private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.taskManagerService.getTaskList().subscribe(
      {
        next: tasks => this.tasks = tasks,
        error: err =>  this.messageService.add({severity:'error', summary:'Wystąpił błąd', detail:'Wystąpił błąd'})
      }

    )
  }

}
