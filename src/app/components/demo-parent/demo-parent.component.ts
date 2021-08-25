import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
})
export class DemoParentComponent {
  msg: string;
  sizes: Array<string>;
  config: {
    [key: string]: any;
  };
  count: {
    value: number,
  };

  constructor() {
    this.msg = 'Hello';
    this.sizes = [
      'small',
      'medium',
      'large',
    ];
    this.config = {
      x: 1,
      y: 'B',
      z: false,
    };
    this.count = {
      value: 0,
    };
  }

  addNumber = (value: number) => {
    this.count.value += value;
  };
}
