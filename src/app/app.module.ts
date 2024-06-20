import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProductListsComponent } from './pages/product-lists/product-lists.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/item.reducer';
import { LoadingComponent } from './components/loading/loading.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { SingleitemComponent } from './components/singleitem/singleitem.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListsComponent,
    SingleProductComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    AllCategoriesComponent,
    CapitalizePipe,
    ProductComponent,
    ButtonComponent,
    LoadingComponent,
    SingleitemComponent,
    StoreModule.forRoot({cartt:cartReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
