import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { OrderComponent } from './order/order.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QPizzaAboutComponent } from './q-pizza-about/q-pizza-about.component';
import { QPizzaPizzasComponent } from './q-pizza-pizzas/q-pizza-pizzas.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPizzaCreateComponent } from './form-pizza-create/form-pizza-create.component';



@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    OrderComponent,
    QPizzaAboutComponent,
    QPizzaPizzasComponent,
    InputNumberComponent,
    FormPizzaCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
