import { Component } from '@angular/core';

@Component({
  selector: 'index-page',
  template: `
    <div class="page">
      <div class="page__title">Main page</div>
      <div class="page__describe">
        <h3>
          This is demo application to represent main features of using Angular:
        </h3>
        <ul>
          <li>Working with Typescript - main language wor developing Angular apps</li>
          <li>Using RxJS - library to provide reactive streams which are widely used in Angular</li>
          <li>Division the app into modules</li>
          <li>Using components</li>
          <li>Working with Services - providers of data</li>
          <li>Working with HTTP requests using HttpClient</li>
          <li>Creating and using pipes</li>
          <li>Interacting with users (ReactiveForms, )</li>
          <li>Using template vars</li>
          <li>Rendering html using *ngIf, *ngFor</li>
          <li>Using class binding</li>
          <li>Working with Angular router - to develop SPA/PWA apps</li>
          <li>Using navigation guards - to protect some features</li>
        </ul>
      </div>
    </div>
  `,
})
export class IndexPageComponent {}
