import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/catalogs/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/catalogs/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
