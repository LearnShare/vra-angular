import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

interface ChangeData {
  checked: Boolean;
}

@Component({
  selector: 'app-toggle-button',
  template: `
    <button
        (click)="toggleChecked()">{{ checked ? 'ON': 'OFF' }}</button>
  `,
})
export class ToggleButtonComponent {
  @Output() change = new EventEmitter<ChangeData>();

  checked: Boolean;

  constructor() {
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked;

    this.change.emit({
      checked: this.checked,
    });
  }
}
