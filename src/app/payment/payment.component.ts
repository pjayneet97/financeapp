import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  products: any[] = [];
  objectKeys = Object.keys;
  totalPrice = 0;
  quantity = 0;
  payableAmount = 0;
  WindowRef: any;
  processingPayment: boolean;
  paymentResponse:any = {};
  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
      this.WindowRef = this.paymentService.WindowRef;
  }






  proceedToPay($event) {
    this.processingPayment = true;
    this.initiatePaymentModal($event);
  }


  initiatePaymentModal(event) {
          var rzp1 = new this.WindowRef.Razorpay(this.preparePaymentDetails());
          this.processingPayment = false;
          rzp1.open(); 
          event.preventDefault();
   }


   preparePaymentDetails(){

    var ref = this;
    return  {
      "key": "rzp_live_Y3gk4Gy7r09imm", // Enter the Key ID generated from the Dashboard
      "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Splixcube",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#F37254"
      }
     };
   }



}
