import { Component, OnInit } from '@angular/core';
declare var RazorpayCheckout:any;
@Component({
  selector: 'app-cap-payment',
  templateUrl: './cap-payment.component.html',
  styleUrls: ['./cap-payment.component.css']
})
export class CapPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_live_Y3gk4Gy7r09imm", // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'foo',
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
