import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  login(obj: any) {
    return this.http.post("https://restaurantapi.stepacademy.ge/api/auth/login", obj, {
      headers: { "X-API-KEY": "14c34c99-91b6-41a8-ad96-f4d3dc43e35b" }
    });
  }

  register(obj: any) {
    return this.http.post("https://restaurantapi.stepacademy.ge/api/auth/register", obj, {
      headers: { "X-API-KEY": "14c34c99-91b6-41a8-ad96-f4d3dc43e35b" }
    });
  }

  verify(obj: any) {
    return this.http.put("https://restaurantapi.stepacademy.ge/api/auth/verify-email", obj, {
      headers: { "X-API-KEY": "14c34c99-91b6-41a8-ad96-f4d3dc43e35b" }
    });
  }
}