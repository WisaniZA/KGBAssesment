import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  debts: any[]; 

  constructor() {
    // Initialize debts with mock data or fetch data from a service
    this.debts = [
      { id: 1, debtor: 'Capitec', balance: 1000 },
      { id: 2, debtor: 'Edgars', balance: 2500 },
      { id: 3, debtor: 'Markham', balance: 1000 },
      { id: 4, debtor: 'FNB', balance: 2500 },
      
    ];
  }

  payDebt(debtorId: number) {
    console.log(`Paying debt for debtor with ID: ${debtorId}`);
  }

}
