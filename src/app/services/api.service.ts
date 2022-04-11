import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(private http: HttpClient) { }

  getTodos(): Observable<todo[]>{
    return this.http.get<todo[]>(this.apiUrl);
  }

}

export interface todo {
  userid: number,
  id: number,
  title: string,
  completed: string
}
