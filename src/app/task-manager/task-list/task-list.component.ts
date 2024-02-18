import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Dictionary, Task} from "../task-manager.model";
import {TaskManagerService} from "../task-manager.service";
import {TablePageEvent} from "primeng/table/table.interface";
import {FilterService} from "primeng/api";
import {Table} from "primeng/table";
import {TaskManagerStoreService} from "../task-manager-store.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ExcelExportComponent} from "../excel-export/excel-export.component";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, AfterViewInit {

  @Input() tasks: Task[] = [];
  @ViewChild('tasktable') dataTable: Table | undefined;

  ref: DynamicDialogRef | undefined;

  first = 0;
  rows = 10;

  statuses: Dictionary[] = [];
  categories: Dictionary[] = [];
  areas: Dictionary[] = [];

  constructor(private taskMangerService: TaskManagerService, private filterService: FilterService, private taskMangerStoreService: TaskManagerStoreService, private dialogService: DialogService) {
  }

  ngAfterViewInit(): void {
    this.dataTable?.restoreState();
  }

  ngOnInit(): void {
    this.taskMangerService.getTaskStatusValues().subscribe(statuses => this.statuses = statuses);
    this.taskMangerService.getTaskCategoryValues().subscribe(categories => this.categories = categories);
    this.taskMangerService.getTaskAreaValues().subscribe(areas => this.areas = areas);
  }


  set selectedTask(selectedTask: Task) {
    if (selectedTask) {
      this.taskMangerStoreService.setSelectedTask(selectedTask);
    }
  }

  get selectedTask(): Task | undefined {
    return this.taskMangerStoreService.selectedTaskId;
  }


  next() {
    this.dataTable!.first=this.dataTable!.first!+ this.rows;
    this.first = this.dataTable!.first
    this.dataTable?.saveState();
  }

  prev() {
    this.dataTable!.first=this.dataTable!.first!- this.rows;
    this.first = this.dataTable!.first
    this.dataTable?.saveState();
  }

  isLastPage(): boolean {
    return this.dataTable?.totalRecords ? (this.dataTable?.first! + this.rows) >= this.dataTable?.totalRecords : true;
  }

  isFirstPage(): boolean {
    return this.dataTable?.totalRecords ? this.dataTable?.first === 0 : true;
  }

  pageChange(event: TablePageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }


  openExcelExportModal() {
    this.ref = this.dialogService.open(ExcelExportComponent, { header: 'Eksport do pliku Excel', modal: true, closable: true, width: '300px', height: '250px'});
  }


}
