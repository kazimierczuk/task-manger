import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Task} from "./task-manager.model";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerStoreService {

  private selectedTask: Subject<number> = new Subject<number>();

  public selectedTaskId$ = this.selectedTask.asObservable();

  private task: Task | undefined;

  public setSelectedTask(task: Task) {
    this.task = task
    this.selectedTask.next(task.id);
  }

  get selectedTaskId(): Task | undefined {
    return this.task;
  }
}
