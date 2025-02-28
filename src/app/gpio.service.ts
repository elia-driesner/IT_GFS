import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GpioService {
  
  private apiUrl = 'http://172.28.40.73:8080';

  constructor(private http: HttpClient) {}

  toggleLed() : void {
    // console.log(this.http.get(`${this.apiUrl}/toggle`, {}));
    this.http.get(`${this.apiUrl}/toggle`).subscribe(config => {
      console.log(config);
    });
  }
}
