
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
  ) { }

  get WindowRef() {
    return window;
  }

}