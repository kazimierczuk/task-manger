import {ChangeDetectorRef, Component, DestroyRef, inject} from '@angular/core';
import {interval, takeWhile} from "rxjs";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";


type FileGenerationState =  'ready' | 'generated' | 'generating';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent {

  private destroyRef = inject(DestroyRef);
  status: FileGenerationState = 'ready';

  templates = [
    {name: "Opcja 1"},
    {name: "Opcja 2"}
  ];
  progress: number = 0;

  constructor(private cdRef: ChangeDetectorRef, private dialogConfig: DynamicDialogConfig, private ref: DynamicDialogRef) {
  }

  generateFile() {
    this.status = 'generating';
    this.dialogConfig.closable = false;

    interval(1000)
      .pipe(takeWhile(() => this.progress <= 100), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.progress < 100) {
          this.progress += 5;
        } else {
          this.status = 'generated'
          this.dialogConfig.closable = true;
          this.cdRef.detectChanges();
        }
      });


  }

  downloadFile() {
    let link = document.createElement('a');
    link.href = '/assets/data/wygenerowany-dokument.xlsx';
    link.click();

    setTimeout(() => {
      this.ref.close();
    }, 1000);

  }
}
