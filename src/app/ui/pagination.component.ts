import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'pagination-element',
  template: `
    <div class="pagination">
      <span class="pagination__prev"
            [ngClass]="{active: checkAvailable('prev')}"
            (click)="goTo('prev')"
      ><</span>
      <span
        class="pagination__page"
        *ngFor="let page of total | pagination:itemsOnPage"
        [ngClass]="{active: page === currentPage}"
        (click)="changePage(page)"
      >
        {{ page }}
      </span>
      <span class="pagination__next"
            [ngClass]="{active: checkAvailable('next')}"
            (click)="goTo('next')"
      >></span>
    </div>
  `
})
export class PaginationComponent {
  @Input() total!: number;
  @Input() currentPage!: number;
  @Input() itemsOnPage!: number;
  @Output() navigateTo = new EventEmitter<number>()

  changePage(to: number) {
    this.navigateTo.emit(to)
  }

  checkAvailable(dir: 'next' | 'prev'): boolean {
    if (dir === 'prev' && this.currentPage - 1) return true
    else if (dir === 'next') {
      const maxPages = Math.ceil(this.total / this.itemsOnPage)
      const nextPage = this.currentPage + 1
      return nextPage <= maxPages
    }
    return false
  }

  goTo(dir: 'next' | 'prev') {
    if (!this.checkAvailable(dir)) return
    if (dir === 'prev') this.changePage(this.currentPage - 1)
    else this.changePage(this.currentPage + 1)
  }
}
