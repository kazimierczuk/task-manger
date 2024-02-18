import {Injectable} from '@angular/core';
import {MenuItem} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerConfigurationService {

  initMenu(): MenuItem[] {
    return [
      {label: 'Otrzymane', icon: 'pi pi-fw pi-home', routerLink: 'tasks',},
        {label: 'W trakcie realizacji', icon: 'pi pi-fw pi-calendar', routerLink: 'ongoing'},
        {label: 'Moje zadania', icon: 'pi pi-fw pi-pencil', routerLink: 'my'},
        {label: 'Zlecone', icon: 'pi pi-fw pi-file', routerLink: 'requested'},
        {label: 'Wykonywane', icon: 'pi pi-fw pi-file', routerLink: 'done'},
        {label: 'Nadzorowane', icon: 'pi pi-fw pi-file', routerLink: 'supervisored'},
      ];
  }
}
