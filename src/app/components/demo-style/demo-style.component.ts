import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-demo-style',
  templateUrl: './demo-style.component.html',
  styleUrls: [
    './demo-style.component.scss',
  ],
})
export class DemoStyleComponent {
  color: string;
  fontSize: string;
  bgColor: string;

  styleString: string;
  styleObject: {
    [key: string]: any;
  };

  classString: string;
  classList: Array<string>;
  classObject: {
    [key: string]: any;
  };

  constructor() {
    this.color = '#AAF';
    this.fontSize = '150%';
    this.bgColor = '#CCF';

    const styles = [
      'fontSize: 16px',
      'color: #F66',
    ];
    this.styleString = styles.join(';');
    this.styleObject = {
      'font-size': '16px',
      color: '#333',
    };

    this.classString = 'info success';
    this.classList = [
      'info',
      'warning',
    ];
    this.classObject = [
      'info',
      'danger',
    ];
  }
}
