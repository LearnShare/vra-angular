import {
  Component,
} from '@angular/core';
import {
  Store,
} from '@ngrx/store';

import {
  setToken,
  clear,
} from '../../store/store.actions';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
})
export class PageUserComponent {
  constructor(private store: Store) {}

  setToken() {
    this.store.dispatch(setToken({
      token: 'new-token',
    }));
  }

  clear() {
    this.store.dispatch(clear());
  }
}
