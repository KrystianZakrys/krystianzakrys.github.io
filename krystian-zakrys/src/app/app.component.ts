import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor() {
  }
  title = 'krystian-zakrys';
  isMobile() {
    return window.innerWidth < 768;
  }
}
