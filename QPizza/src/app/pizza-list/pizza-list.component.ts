import { Component, OnInit } from '@angular/core';
import { Pizza } from '../interface/pizza';
import { FormsModule } from '@angular/forms';
import { PizzaOrderService } from '../service/pizza-order.service';
import { PizzaDataService } from '../service/pizza-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  pizzas$: Observable<Pizza[]>;
  constructor(private order:PizzaOrderService, private pizzaService:PizzaDataService){
    this.pizzas$ = pizzaService.getAll();
  }
  
   addToOrder(pizza:Pizza):void{
    this.order.addToOrder(pizza);
    pizza.quantity = 0;
  }


}

