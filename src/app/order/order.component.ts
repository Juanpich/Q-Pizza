import { Component } from '@angular/core';
import { PizzaOrderService } from '../service/pizza-order.service';
import { Pizza } from '../interface/pizza';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  priceTotal$: Observable<number>;
  orderPizza$: Observable<Pizza[]>;
  constructor(private order: PizzaOrderService) {
    this.orderPizza$ = order.orderPizza.asObservable();

    this.priceTotal$ = this.orderPizza$.pipe(
      map(pizzas => pizzas.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0))
    );
  }
}
