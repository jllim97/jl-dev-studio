import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly BASE_URL: string = 'portfolio-ws/portfolio'
  constructor(private http: HttpClient) {}


  getPortfolios() {
    return this.http.get(this.BASE_URL + '/all');
  }
}
