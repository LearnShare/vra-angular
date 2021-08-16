import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html',
})
export class DemoTemplateComponent {
  msg: string;
  a: number;
  b: number;
  imgUrl: string;
  htmlContent: string;

  constructor() {
    this.msg = 'value from data';
    this.a = 1;
    this.b = 2;
    this.imgUrl = 'https://images.unsplash.com/photo-1629019625736-89ff131a723c?w=160&q=80';
    this.htmlContent = '<strong>html content</strong>';
  }
}
