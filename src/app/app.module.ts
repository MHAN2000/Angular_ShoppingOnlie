import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { PrimengModule } from './primeng/primeng.module';
import { UserComponent } from './components/catalogs/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { TopSellingProductsComponent } from './components/home/top-selling-products/top-selling-products.component';
import { ProductComponent } from './components/catalogs/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/catalogs/product/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    TopSellingProductsComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
