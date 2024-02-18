import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabViewModule} from "primeng/tabview";
import {TabMenuModule} from "primeng/tabmenu";
import {TableModule} from "primeng/table";
import {TaskListComponent} from './task-manager/task-list/task-list.component';
import {TaskDetailComponent} from './task-manager/task-detail/task-detail.component';
import {TaskManagerComponent} from './task-manager/task-manager.component';
import {HttpClientModule} from "@angular/common/http";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {EmptyPageComponent} from './shared/empty-page/empty-page.component';
import {PaginatorModule} from "primeng/paginator";
import {TagModule} from "primeng/tag";
import {DateFormatPipe} from './shared/pipes/date-format.pipe';
import {DatePipe} from "@angular/common";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {ExcelExportComponent} from './task-manager/excel-export/excel-export.component';
import {ProgressBarModule} from "primeng/progressbar";
import {MessageService} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskManagerComponent,
    EmptyPageComponent,
    DateFormatPipe,
    ExcelExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    TabViewModule,
    TabMenuModule,
    TableModule,
    HttpClientModule,
    ProgressSpinnerModule,
    PaginatorModule,
    TagModule,
    DatePipe,
    DynamicDialogModule,
    ProgressBarModule,
    TooltipModule
  ],
  providers: [DatePipe, DialogService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
