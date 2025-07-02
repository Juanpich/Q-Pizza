import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Pizza } from '../interface/pizza';


@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent{
  constructor(){}
  @Input()
    quantity: number = 0;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
  decreaseQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  onChangeQuantity(event: KeyboardEvent) {
    if(this.quantity < 0){
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);

    
  }
}
