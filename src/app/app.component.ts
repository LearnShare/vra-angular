import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vra-angular';

  toggleOnChange(eventData: any) {
    console.log(eventData);
  }
}
