import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//pages
import { AppComponent } from './app.component';
import { InvestmentListComponent } from '../pages/investment-list/investment-list.component';
import { InvestmentDetailsComponent } from '../pages/investment-list/investment-details/investment-details.component';

//services
import { InvestmentService } from 'src/providers/investment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormControl, FormsModule } from '@angular/forms';

import { 
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    InvestmentDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    InvestmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
