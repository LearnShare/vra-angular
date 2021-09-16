import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoSlotComponent } from './components/demo-slot/demo-slot.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MultipleSlotComponent } from './components/multiple-slot/multiple-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoSlotComponent,
    HelloWorldComponent,
    MultipleSlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
