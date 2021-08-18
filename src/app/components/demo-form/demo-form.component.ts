import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss'],
})
export class DemoFormComponent {
  // 1. bind/event
  count: number;
  textValue: string;
  checked: boolean;

  // 2. [(value)]
  textValue2: string;
  options: Array<string>;
  form: {
    [key: string]: any;
  };

  constructor() {
    this.count = 0;
    this.textValue = 'hi';
    this.checked = true;

    this.textValue2 = 'hello';
    this.options = [
      'A',
      'B',
      'C',
    ];
    this.form = {
      username: 'admin',
      comment: 'it\'s nice',
      date: '2021-09-12',
      rememberMe: false,
      groups: [
        'C',
      ],
      group: 'B',
      picked: 'A',
    };
  }

  updateCount() {
    this.count += 1;
  }

  updateText(value: string) {
    this.textValue = value;
  }

  updateChecked(checked: boolean) {
    this.checked = checked;
  }

  submitForm(event: any) {
    event.preventDefault();

    console.log(this.form);
  }
}
