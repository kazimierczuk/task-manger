import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: Date | number | string, ...args: unknown[]): unknown {
    let format = "yyyy-MM-dd";
    return this.datePipe.transform(value, format);
  }

}
