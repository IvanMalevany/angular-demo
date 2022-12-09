import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(total: number, itemsOnPage: number): number[] {
    const pages = Math.ceil(total / itemsOnPage)
    return Array.from(Array(pages), (_, index) => index + 1)
  }
}
