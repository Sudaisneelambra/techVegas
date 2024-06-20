import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListsComponent } from './pages/product-lists/product-lists.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'category'
  },
  {
    path:'category',
    component:HomePageComponent
  },
  {
    path:'category/:categoryname',
    component:ProductListsComponent
  },
  {
    path:'singleProduct/:id',
    component:SingleProductComponent
  },
  {
    path:'Profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
