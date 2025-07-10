import { Injectable } from '@angular/core';
import { Pizza } from '../interface/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
const URL = 'https://686680f089803950dbb2f085.mockapi.io/q-pizza/pizza'
@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

  constructor(private http: HttpClient) { 


  }

  getAll():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(URL).pipe( tap((pizzas:Pizza[]) => pizzas.forEach(pizza => pizza.quantity = 0)));
  }
  create(p:Pizza):Observable<Pizza>{
    const { quantity, ...pWithoutQuantity } = p;
    return this.http.post<Pizza>(URL, pWithoutQuantity,{responseType:'json'})
  }
}
