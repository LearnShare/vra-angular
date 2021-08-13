import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  template: `
    <button
        (click)="toggleChecked()">{{ checked ? 'ON': 'OFF' }}</button>
  `,
})
export class ToggleButtonComponent {
  checked: Boolean;

  constructor() {
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked;
  }
}
