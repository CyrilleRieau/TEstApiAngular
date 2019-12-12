import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentDetailsComponent } from '../pages/investment-list/investment-details/investment-details.component';
import { InvestmentListComponent } from '../pages/investment-list/investment-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'list', component: InvestmentListComponent },
  { path: 'details', component: InvestmentDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
