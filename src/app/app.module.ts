import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRefComponent } from './components/demo-ref/demo-ref.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DemoTemplateRefComponent } from './components/template-ref/template-ref.component';
import { DemoViewChildrenComponent } from './components/view-children/view-children.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoRefComponent,
    HelloWorldComponent,
    DemoTemplateRefComponent,
    DemoViewChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
