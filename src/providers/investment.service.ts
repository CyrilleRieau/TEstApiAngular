import { Injectable } from '@angular/core';
import { Investment } from 'src/models/investment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private SERVER_URL = "http://localhost:3000/investments";
  investments: Investment[] = []
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL, {responseType: 'text'})
  }

  public getByCity(city: string): Observable<Investment[]> {
    const options = city ?
    { params: new HttpParams().set('ville', city) } : {};
    return this.httpClient.get<Investment[]>(this.SERVER_URL, options)
  }

  public getByState(avancement: string): Observable<Investment[]> {
    const options = avancement ?
    { params: new HttpParams().set('etat_d_avancement', avancement) } : {};
    return this.httpClient.get<Investment[]>(this.SERVER_URL, options)
  }

  public getOne(code: string): Observable<Investment> {
    const options = code ?
    { params: new HttpParams().set('codeuai', code) } : {};
    return this.httpClient.get<Investment>(this.SERVER_URL, options)
  }
}
