import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoAttrsComponent } from './components/demo-attrs/demo-attrs.component';
import { SingleRootComponent } from './components/single-root/single-root.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAttrsComponent,
    SingleRootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
