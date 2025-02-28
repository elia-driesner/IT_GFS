import { Component } from '@angular/core';

import * as gpio from 'rpi-gpio';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    gpio.setup(7, gpio.DIR_OUT)
  }

  pinState : boolean = false;

  toggleLed() : void {
    console.log('led')
    this.pinState = !this.pinState;
    gpio.write(7, this.pinState)
  }
}
