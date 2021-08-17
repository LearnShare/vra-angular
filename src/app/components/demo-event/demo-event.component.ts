import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-event',
  templateUrl: './demo-event.component.html',
})
export class DemoEventComponent {
  count: number;
  inputValue: string;
  inputValue2: string;
  list: Array<string>;

  constructor() {
    this.count = 0;
    this.inputValue = '';
    this.inputValue2 = '';
    this.list = [
      'A',
      'B',
      'C',
    ];
  }

  addOne() {
    this.count += 1;
  }

  textChanged(event: any) {
    this.inputValue = event.target.value;
  }

  textChanged2(value: string) {
    this.inputValue2 = value;
  }

  listItemOnClick(event: any, type: string, index: number) {
    console.log(event.target, type, index);
  }
}
