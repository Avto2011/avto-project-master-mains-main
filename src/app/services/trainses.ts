import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ApiService {

  constructor(private http: HttpClient) {}

 private base = 'https://railway.stepprojects.ge/api';



  getAll(endpoint: string) {
    return this.http.get(this.base + endpoint);
  }
  getAvailableSeats(trainId: number): Observable<any> {
  return this.http.get(`${this.base}/trains/${trainId}/seats`);
}

bookTicket(data: any): Observable<any> {
  return this.http.post(`${this.base}/tickets/register`, data);
}
}