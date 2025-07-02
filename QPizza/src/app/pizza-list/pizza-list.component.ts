import { Component } from '@angular/core';
import { Pizza } from '../interface/pizza';
import { FormsModule } from '@angular/forms';
import { PizzaOrderService } from '../pizza-order.service';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {

  constructor(private order:PizzaOrderService){
    
  }
  pizzas: Pizza[] = [
    {
      id: 1,
      name: "Muzzarella",
      description: "Salsa de tomate, abundante queso muzzarella, orégano y aceitunas",
      price: 2000,
      image: "./assets/img/mozzarella.png",
      offer: false,
      quantity: 0,
    },
    {
      id: 2,
      name: "Napolitana",
      description: "Salsa de tomate, queso muzzarella, rodajas de tomate fresco, ajo y orégano",
      price: 2300,
      image: "./assets/img/napolitana.png",
      offer: true,
      quantity: 0,
    },
    {
      id: 3,
      name: "Fugazzetta",
      description: "Base de muzzarella cubierta con abundante cebolla y un toque de orégano",
      price: 2500,
      image: "./assets/img/fugazzetta.png",
      offer: false,
      quantity: 0,
    }
  ];

  addToOrder(pizza:Pizza):void{
    this.order.addToOrder(pizza);
    pizza.quantity = 0;
  }


}

