import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private base = 'https://railway.stepprojects.ge/api/';

  constructor(private http: HttpClient) {}

 registerTicket(payload: any) {
  return this.http.post(this.base + 'tickets/register', payload, {
    responseType: 'text'
  });
}

cancelTicket(ticketId: string) {
  return this.http.delete(this.base + 'tickets/cancel/' + ticketId, {
    responseType: 'text'
  });
}

checkStatus(ticketId: string) {
  return this.http.get(this.base + 'tickets/checkstatus/' + ticketId, {
    responseType: 'text'
  });
}
}
