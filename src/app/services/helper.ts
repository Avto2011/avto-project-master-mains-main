import { Injectable } from '@angular/core';
 
@Injectable({ providedIn: 'root' })
export class Helper {
  cleanString(text: string): string {
    return text.trim();
  }
 
  setLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }
 
  getLocal(key: string): string | null {
    return localStorage.getItem(key);
  }
}
 