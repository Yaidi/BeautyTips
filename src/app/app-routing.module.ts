import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductComponent},
  {path:'product/:id', component: DetailsProductComponent},
  {path:'**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
