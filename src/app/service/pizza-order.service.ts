import { Injectable } from '@angular/core';
import { Pizza } from '../interface/pizza';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {
  private _orderPizza: Pizza[]=[];
  orderPizza: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._orderPizza);

  constructor() { }
  addToOrder(pizza: Pizza): void {
    if (pizza.quantity > 0) {
      let item = this._orderPizza.find((p) => p.id == pizza.id);
      if (!item) {
        this._orderPizza.push({ ...pizza });
      } else {
        item.quantity += pizza.quantity;
      }
      this.orderPizza.next([...this._orderPizza]);
    }
  }


}
