import { Component } from '@angular/core';

@Component({
  selector: 'app-debt-details',
  templateUrl: './debt-details.component.html',
  styleUrls: ['./debt-details.component.css']
})
export class DebtDetailsComponent {
  debtDetails: any[]; // Declare debtDetails as an array

  constructor() {
    // Initialize debtDetails with mock data or fetch data from a service
    this.debtDetails = [
      { date: '2023-01-01', payment: 10, reversal: 0, interest: 1000, fees: 20 },
      { date: '2023-02-15', payment: 20, reversal: 0, interest: 2000, fees: 15 },
      { date: '2023-03-01', payment: 30, reversal: 0, interest: 3000, fees: 20 },
      { date: '2023-04-15', payment: 40, reversal: 0, interest: 4000, fees: 15 },
      { date: '2023-05-01', payment: 50, reversal: 0, interest: 5000, fees: 20 },
      { date: '2023-06-15', payment: 60, reversal: 0, interest: 6000, fees: 15 },
      { date: '2023-07-01', payment: 70, reversal: 0, interest: 7000, fees: 20 },
      { date: '2023-09-15', payment: 80, reversal: 0, interest: 8000, fees: 15 },
      
    ];
  }

  ngOnInit(): void {
  
  }

}
