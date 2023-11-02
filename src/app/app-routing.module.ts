import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebtDetailsComponent } from './debt/debt-details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'login', component:LoginComponent 
  },
  {
    path: 'admin',
  loadChildren: () =>
   import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dashboard',component:DashboardComponent
  },
  {
    path: 'debt', component: DebtDetailsComponent
  },
  {
      path: 'payment', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
