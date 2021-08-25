import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-demo-children',
  templateUrl: './demo-children.component.html',
})
export class DemoChildrenComponent {
  @Input() numberValue = 0;
  @Input('string-value') stringValue = '';
  @Input() list: Array<string> = [];
  @Input() config: {
    [key: string]: any,
  } = {};
  @Input() count: number = 0;
  @Input() func: Function = () => {};

  add() {
    this.func(2);
  }
}
