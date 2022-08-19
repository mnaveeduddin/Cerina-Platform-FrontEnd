import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<todo[]>{
    return this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos/');
  }

  getUserData(): Observable<credentials[]>{
    return this.http.get<credentials[]>('http://localhost:8080/usersInfo');
  }
}
export interface credentials {
  id: any,
  username: string,
  password: string,
  email:string,
  createdAt:any,
  updatedAt:any
}

export interface todo {
  userid: number,
  id: number,
  title: string,
  completed: string
}
