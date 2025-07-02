import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { QPizzaAboutComponent } from './q-pizza-about/q-pizza-about.component';
import { QPizzaPizzasComponent } from './q-pizza-pizzas/q-pizza-pizzas.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    OrderComponent,
    QPizzaAboutComponent,
    QPizzaPizzasComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
