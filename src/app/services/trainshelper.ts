import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Trainshelper {

  cleanString(string : string){
     string.toUpperCase().trim()
     console.log(string.toUpperCase().trim());
     
  }

  setLocal(name : string, value : string){
       localStorage.setItem(name, value)
  }
}

