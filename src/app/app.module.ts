import {
  NgModule,
} from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';
import {
  StoreModule,
} from '@ngrx/store';
import {
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';

import {
  AppRoutingModule,
} from './app-routing.module';
import {
  AppComponent,
} from './app.component';
import {
  userReducer,
} from './store/store.module';

import {
  PageHeaderComponent,
} from './components/page-header/page-header.component';
import {
  PageUserComponent,
} from './components/page-user/page-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
