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

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    InvestmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    InvestmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
