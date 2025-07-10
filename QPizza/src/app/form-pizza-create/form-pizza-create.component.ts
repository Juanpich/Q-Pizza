import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Pizza } from '../interface/pizza';
import { PizzaDataService } from '../service/pizza-data.service';


@Component({
  selector: 'app-form-pizza-create',
  standalone: false,
  templateUrl: './form-pizza-create.component.html',
  styleUrl: './form-pizza-create.component.scss'
})
export class FormPizzaCreateComponent {
  result: boolean | null = null;
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    offer: new FormControl(''),
    image: new FormControl(''),
  });
  constructor(private pizzaData: PizzaDataService) { }
  onSubmit() {
    let p: Pizza = {
      name: this.createForm.get('name')?.value ?? '',
      description: this.createForm.get('description')?.value ?? '',
      price: Number(this.createForm.get('price')?.value),
      offer: Boolean(this.createForm.get('offer')?.value),
      image: this.createForm.get('image')?.value ?? '',
      quantity: 0,
    }
    this.pizzaData.create(p).subscribe({
      next: (response) => {
        this.result = true;
        this.createForm.reset();
      },
      error: (error) => {
        this.result = false;
      }
    });
    this.pizzaData.create(p).subscribe({
      next: () => {
        this.result = true;
        this.createForm.reset();
        setTimeout(() => {
          this.result = null;
        }, 7000);
      },
      error: (error) => {
        this.result = false;
      }
    });


  }
}
