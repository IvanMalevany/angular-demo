import { Component } from '@angular/core';

@Component({
  selector: 'loader-element',
  template: `
    <div class="loading">
      <div class="loading__box">
        <div class="loading__icon"></div>
        <div class="loading__title">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class LoaderComponent {}
