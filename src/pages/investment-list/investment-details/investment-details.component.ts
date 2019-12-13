import { Component, OnInit } from '@angular/core';

import { InvestmentService } from 'src/providers/investment.service';
import { Investment } from 'src/models/investment';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {

  public investmentCode: string
  public investment: any
  public investments: [] = []

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() {
    this.investmentCode = localStorage.getItem('investment')
    this.investmentService.getAll().subscribe((data)=> {
      this.investments = JSON.parse(data);
      if(this.investmentCode && this.investments) {
        this.investment = this.investments.find((investment: Investment) => { 
          return investment.codeuai == this.investmentCode })
      }
    })
  }

}
