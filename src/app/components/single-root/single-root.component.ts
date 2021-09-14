import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-single-root',
  templateUrl: './single-root.component.html',
})
export class SingleRootComponent {
  @Input() attrA = '';
}
