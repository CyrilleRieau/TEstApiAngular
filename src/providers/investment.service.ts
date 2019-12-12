import { Injectable } from '@angular/core';
import { Investment } from 'src/models/investment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private SERVER_URL = "http://localhost:3000/investments";
  investments: Investment[] = []
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    // let observer = new ReplaySubject<any>()
    // const request = new ApiRequest<any>(this.SERVER_URL, null)
    // this.getAll(request).subscribe(
    //   (data)=> { this.investments = data;
    //   observer.next(this.investments) }
    // )
    //   return observer  
    return this.httpClient.get(this.SERVER_URL, {responseType: 'text'})
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
