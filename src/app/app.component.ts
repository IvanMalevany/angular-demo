import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentYear !: number;

  constructor() {
    const date = new Date()
    this.currentYear = date.getFullYear()
  }
}
