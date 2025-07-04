import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QPizzaAboutComponent } from './q-pizza-about/q-pizza-about.component';
import { QPizzaPizzasComponent } from './q-pizza-pizzas/q-pizza-pizzas.component';

const routes: Routes = [
  {path:'', redirectTo: 'pizzas', pathMatch: 'full'},
  {path:'pizzas', component:QPizzaPizzasComponent},
  {path:'about', component: QPizzaAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
