import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TaskManagerService} from "../task-manager.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {TaskDetails} from "../task-manager.model";
import {TaskManagerStoreService} from "../task-manager-store.service";
import {MessageService} from "primeng/api";


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  private destroyRef = inject(DestroyRef);
  taskDetails: TaskDetails | undefined;
  emptyState = true;


  constructor(private taskManagerService: TaskManagerService, private taskManagerStore: TaskManagerStoreService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.taskManagerStore.selectedTaskId$.pipe(takeUntilDestroyed(this.destroyRef), switchMap((taskId: number) => {
      this.emptyState = false;
      this.taskDetails = undefined;
      return this.taskManagerService.getTaskLDetails(taskId);
    })).subscribe(
      {
        next: taskDetails => {
          this.taskDetails = taskDetails;
        },
        error:  err => {
          this.messageService.add({severity:'error', summary:'Wystąpił błąd', detail:'Wystąpił błąd'});
        }
      }
);
  }


}
