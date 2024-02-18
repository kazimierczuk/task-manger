import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {TaskManagerConfigurationService} from "./task-manager/task-manager-configuration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-manager';

  menuItems: MenuItem[] | undefined;

  constructor(private taskManagerConfiguration: TaskManagerConfigurationService) {
  }

  ngOnInit() {
    this.menuItems = this.taskManagerConfiguration.initMenu()
  }

}
