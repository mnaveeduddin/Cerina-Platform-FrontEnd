import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  
  constructor() { }

  // setValue(token: any){
  //   var array = JSON.parse(localStorage.getItem('Data') || '[]');
  //   array.push(token);
  //   localStorage.setItem('Data', JSON.stringify(array));
  //   console.log(localStorage.Data);

  // }

  // getValue(){
  //   return localStorage.getItem('Data');
  // }

  setInfo(data: string){
    localStorage.setItem('Info', data);
  }

  getInfo(){
    return localStorage.getItem('Info');
  }
}
