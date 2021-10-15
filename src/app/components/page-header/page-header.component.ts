import {
  Component,
} from '@angular/core';
import {
  Store,
} from '@ngrx/store';

import {
  selectToken,
} from '../../store/store.selectors';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  token$ = this.store.select(selectToken);

  constructor(private store: Store) {}
}
