import { Injectable } from '@angular/core';
import { Investment } from 'src/models/investment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
        return this.httpClient.get(this.SERVER_URL)
  }

  public getByCity(city: string): Observable<Investment[]> {
    let observer
    return observer
  }

  public getByEtatAvancement(avancement: string): Observable<Investment[]> {
    let observer
    return observer
  }

  public getOne(id: number): Observable<Investment> {
    let observer
    return observer
  }
}
