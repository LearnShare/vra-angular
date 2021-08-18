import {
  NgModule,
} from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';
import {
  FormsModule,
} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
