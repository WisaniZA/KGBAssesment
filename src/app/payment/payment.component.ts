import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  makePayment(): void {
    // Display popup message
    alert('Payment successful');

    // Clear the form fields
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('debtor') as HTMLInputElement).value = '';
    (document.getElementById('account') as HTMLInputElement).value = '';
    (document.getElementById('amount') as HTMLInputElement).value = '';
  }
}
