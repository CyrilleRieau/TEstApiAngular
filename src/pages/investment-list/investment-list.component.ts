import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/models/investment';
import { InvestmentService } from 'src/providers/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {

  public citySearch: string
  public stateSearch: string
  public investments: Investment[]
  filteredInv: Investment[]
  constructor(
    private investmentService: InvestmentService
  ) { }

  ngOnInit() {
    console.log('tot')
    this.investmentService.getAll().subscribe((data)=> {
      this.investments = JSON.parse(data)})
  }

  public filterDataByCity(){
    const val = this.citySearch
    this.filteredInv = this.investments.filter(function(investment: Investment) {
      return (investment.ville.search(new RegExp(val, 'i')) !== -1 || !val );
    })
    this.investments = this.filteredInv
  }

  public filterDataByState(){
    const val = this.stateSearch
    this.filteredInv = this.investments.filter(function(investment: Investment) {
      return (investment.etat_d_avancement.search(new RegExp(val, 'i')) !== -1 || !val );
    })
    this.investments = this.filteredInv
  }


}
