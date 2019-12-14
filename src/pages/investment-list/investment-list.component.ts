import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/models/investment';
import { InvestmentService } from 'src/providers/investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {

  public citySearch: string = ""
  public citySearchClick: string = ""
  public stateSearch: string= ""
  public stateSearchClick: string= ""
  public investments: Investment[]
  public filteredInv: Investment[]
  constructor(
    private investmentService: InvestmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.investmentService.getAll().subscribe((data)=> {
      this.investments = JSON.parse(data)
      this.filteredInv = this.investments  
    })
  }

  public filterDataByCity(){
    this.filteredInv = this.investments 
    const val = this.citySearch
    this.filteredInv = this.filteredInv.filter(function(investment: Investment) {
      return (investment.ville.search(new RegExp(val, 'i')) !== -1 || !val );
    })
  }

  public filterDataByState(){
    this.filteredInv = this.investments 
    const val = this.stateSearch
    this.filteredInv = this.filteredInv.filter(function(investment: Investment) {
      return (investment.etat_d_avancement.search(new RegExp(val, 'i')) !== -1 || !val );
    })
  }

  public getOneInvestment(investment: any){
    localStorage.setItem('investment', investment.codeuai)
    this.router.navigate(['/details'])
    // , {relativeTo: this.route}

  }

  public filterByCityClick(){
    this.investmentService.getByCity(this.citySearchClick).subscribe((data)=> {
      this.filteredInv = data })
  }

  public filterByStateClick(){
    console.log(this.stateSearchClick)
    this.investmentService.getByState(this.stateSearchClick).subscribe((data)=> {
      this.filteredInv = data 
    })
  }
}
