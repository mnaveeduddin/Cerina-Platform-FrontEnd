import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  
  constructor() { }

  setValue(token: string){
    var array = JSON.parse(localStorage.getItem('Data') || '[]');
    array.push(token);
    localStorage.setItem('Data', JSON.stringify(array));

  }

  getValue(){
    return localStorage.getItem('Data')
  }
}
