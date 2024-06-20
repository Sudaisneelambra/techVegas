import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFormCart } from 'src/app/store/item.action';
import { Router } from '@angular/router';
import { selectCartItems } from 'src/app/store/item.selector';
import { Product } from 'src/app/interfaces/product.interface';
import { CartItem } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{


  @Input() data!: Product | undefined;
  constructor(private store: Store, private router: Router) {}

  className = {
    'padding-left': '28px',
    'background-color': '#152D35',
    'padding-right': '28px',
    'padding-top': '8px',
    'padding-bottom': ' 8px',
    'font-weight': '500',
    'color': 'white',
    'border-radius': '3px',
  };

  cart:CartItem[]=[]
  count:number =0 

  ngOnInit(): void {
    this.store.pipe(select(selectCartItems)).subscribe((cartItems) => {
      this.cart = cartItems; 
      const item = cartItems.find((e: CartItem) => e.id === this.data?.id);
      this.count = item ? item.count : 0;
    });
  }

  // add to cart
  addToCart(id: number | undefined, category: string |undefined) {
    if(id !== undefined && category !== undefined){
      this.store.dispatch(addToCart({ id, category }));
      const item = this.cart.find((e: any) => e.id === id);
      
          if(item){
            this.count = item.count
          }

    }
  }


  // check cart is empty of not
  checkCart(data:Product | undefined){
   if(data !== undefined){
      if(this.cart && this.cart.length>0){
        const index = this.cart.findIndex((e: any) => e.id === data.id);
        return index === -1;

      } else {
        return true
      }

    }
    return 
  }


  // increase cart quantity
  increase(id:number |undefined,category:string |undefined){
    if(id !== undefined && category !== undefined){
      this.store.dispatch(addToCart({id,category}))
    }
  }


  // decrease from cart
  decrease(id:number |undefined,category:string |undefined){
    if(id !== undefined && category !== undefined){
      this.store.dispatch(removeFormCart({id,category}))
    }
  }


  // go to single product page
  gotToSingleDetails(id: number | undefined) {
    this.router.navigate(['singleProduct', id]);
  }

}
