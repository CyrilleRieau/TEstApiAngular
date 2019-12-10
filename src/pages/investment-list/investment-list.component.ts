import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/models/investment';
import { InvestmentService } from 'src/providers/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {

  public investments: Investment[]
  constructor(
    private investmentService: InvestmentService
  ) { }

  ngOnInit() {
    console.log('tot')
    this.investmentService.getAll().subscribe((data)=> this.investments = data)
    console.log(this.investments)
  }

}
