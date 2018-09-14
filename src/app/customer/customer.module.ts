import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CustomerHomeComponent },
  { path: 'detail', component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerHomeComponent, CustomerDetailComponent]
})
export class CustomerModule { }
