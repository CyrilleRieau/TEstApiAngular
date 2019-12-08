import { Injectable } from '@angular/core';
import { Investment } from 'src/models/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }

  public getAll(): Investment[] {
    let observer
    return observer
  }

  public getByCity(): Investment[] {
    let observer
    return observer
  }

  public getByEtatAvancement(): Investment[] {
    let observer
    return observer
  }

  public getOne(): Investment {
    let observer
    return observer
  }
}
