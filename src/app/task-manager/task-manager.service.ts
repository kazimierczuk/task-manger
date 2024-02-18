import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {Dictionary, Task, TaskDetails} from "./task-manager.model";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private urlPrefix = "/assets/data/";

  constructor(private http: HttpClient) {
  }

  getTaskList(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.urlPrefix}/taskListResponse.json`).pipe(delay(100), map(tasks => [...tasks.slice(0, 100)]));
  }

  getTaskLDetails(taskId: number): Observable<TaskDetails> {
    return this.http.get<TaskDetails>(`${this.urlPrefix}/taskDetailsResponse.json`).pipe(delay(500), map(taskDetails => {
      return {...taskDetails, id: taskId}
    }));
  }

  getTaskStatusValues(): Observable<Dictionary[]> {
    return this.getTaskList().pipe(map(tasks => {

        let dics = tasks.map(task => {
          return {
            "id": task.status, "value": task.status
          }
        })

        const key = 'value';
        return [...new Map(dics.map(dic => [dic[key], dic])).values()];
      }
    ));
  }
  getTaskCategoryValues(): Observable<Dictionary[]> {
    return this.getTaskList().pipe(map(tasks => {

        let dics = tasks.map(task => {
          return {
            "id": task.category, "value": task.category
          }
        })

        const key = 'value';
        return [...new Map(dics.map(dic => [dic[key], dic])).values()];
      }
    ));
  }

  getTaskAreaValues(): Observable<Dictionary[]> {
    return this.getTaskList().pipe(map(tasks => {

        let dics = tasks.map(task => {
          return {
            "id": task.area, "value": task.area
          }
        })

        const key = 'value';
        return [...new Map(dics.map(dic => [dic[key], dic])).values()];
      }
    ));
  }

}
