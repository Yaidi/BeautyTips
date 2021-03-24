import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ErrorComponent } from './error/error.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { LinkGenericComponent } from './link-generic/link-generic.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    DetailsProductComponent,
    HomeComponent,
    ProductlistComponent,
    LinkGenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
