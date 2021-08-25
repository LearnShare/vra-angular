import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoChildrenComponent } from './components/demo-children/demo-children.component';
import { DemoParentComponent } from './components/demo-parent/demo-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoChildrenComponent,
    DemoParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
