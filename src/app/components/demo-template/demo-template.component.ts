import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html',
})
export class DemoTemplateComponent {
  msg: string;
  a: number;
  b: number;
  htmlContent: string;

  constructor() {
    this.msg = 'value from data';
    this.a = 1;
    this.b = 2;
    this.htmlContent = '<strong>html content</strong>';
  }
}
