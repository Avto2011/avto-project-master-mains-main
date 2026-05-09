import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Api {
  private base = 'https://railway.stepprojects.ge/api/';

  private restaurantBase = 'https://restaurantapi.stepacademy.ge/api/';
  private restaurantHeaders = {
    'X-API-KEY': '14c34c99-91b6-41a8-ad96-f4d3dc43e35b',
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) {}



  getAll(endpoint: string) {
    return this.http.get(this.base + endpoint);
  }

  bookTicket(payload: any) {
    return this.http.post(this.base + 'tickets/register', payload, {
      responseType: 'text'
    });
  }

  checkStatus(ticketId: string) {
    return this.http.get(this.base + 'tickets/checkstatus/' + ticketId, {
      responseType: 'text'  
    });
  }

  cancelTicket(ticketId: string) {
    return this.http.delete(this.base + 'tickets/cancel/' + ticketId, {
      responseType: 'text'  
    });
  }

  

  login(obj: any) {
    return this.http.post(this.restaurantBase + 'auth/login', obj, {
      headers: this.restaurantHeaders
    });
  }

  register(obj: any) {
    return this.http.post(this.restaurantBase + 'auth/register', obj, {
      headers: this.restaurantHeaders
    });
  }

  verify(obj: any) {
    return this.http.put(
      this.restaurantBase + 'auth/verify-email',
      {
        verify: obj.verify,
        Email: obj.Email,
        Code: obj.Code
      },
      {
        headers: this.restaurantHeaders,
        params: { 'X-API-KEY': '14c34c99-91b6-41a8-ad96-f4d3dc43e35b' }
      }
    );
  }
}