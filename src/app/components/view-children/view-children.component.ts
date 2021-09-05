import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
})
export class DemoViewChildrenComponent
    implements AfterViewInit {
  list: Array<string>;
  @ViewChildren('listItem') listItems!: QueryList<any>;

  constructor() {
    this.list = [
      'red',
      'green',
      'blue',
    ];
  }

  ngAfterViewInit() {
    this.listItems.forEach((item) => {
      console.log(item.nativeElement.textContent);
    });
  }
}
