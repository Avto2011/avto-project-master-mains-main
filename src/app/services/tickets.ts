import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private base = 'https://railway.stepprojects.ge/api';

  constructor(private http: HttpClient) {}

  getVagonSeats(vagonId: number): Observable<any> {
    return this.http.get(`${this.base}/getvagon/${vagonId}`);
  }

  bookTicket(data: any): Observable<string> {
    return this.http.post(`${this.base}/tickets/register`, data, {
      responseType: 'text'  
    });
  }
}