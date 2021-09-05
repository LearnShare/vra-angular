import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
})
export class DemoTemplateRefComponent {
  @Input() type: string = 'info';
}
