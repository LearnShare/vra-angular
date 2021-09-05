import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-demo-ref',
  templateUrl: './demo-ref.component.html',
})
export class DemoRefComponent
    implements AfterViewInit {
  @ViewChild('autoHint') autoHint!: ElementRef;
  @ViewChild('helloWorldRef') helloWorldRef!: HelloWorldComponent;

  textChanged(value: string) {
    console.log(value);
  }

  ngAfterViewInit() {
    if (this.autoHint) {
      const {
        nativeElement,
      } = this.autoHint;

      nativeElement.setAttribute('placeholder', nativeElement.name);
    }
  }

  mute() {
    if (this.helloWorldRef) {
      console.log(this.helloWorldRef.msg);
      this.helloWorldRef.mute();
    }
  }
}
