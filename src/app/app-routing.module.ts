import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskManagerComponent} from "./task-manager/task-manager.component";
import {EmptyPageComponent} from "./shared/empty-page/empty-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
  {
    path: 'tasks',
    pathMatch: 'full',
    component: TaskManagerComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: EmptyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
