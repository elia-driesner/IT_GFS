import { Component } from '@angular/core';
import { GpioService } from './gpio.service';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [GpioService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private gpioService: GpioService) {}

  toggleLed() : void {
    console.log('led')
    this.gpioService.toggleLed();
  }
}
