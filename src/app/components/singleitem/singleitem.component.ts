import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFormCart } from 'src/app/store/item.action';
import { CartItem } from 'src/app/interfaces/cart.interface';
import { selectCartItems } from 'src/app/store/item.selector';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-singleitem',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css']
})
export class SingleitemComponent {

  cart:CartItem[]=[]
  count !:number

  @Input() product!:Product | undefined

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

  constructor (private store:Store) {}

  ngOnChanges(){

    this.store.pipe(select(selectCartItems)).subscribe((cartItems) => {
      this.cart = cartItems; 
      const item = cartItems.find((e: any) => e?.id === this.product?.id);
      this.count = item ? item.count : 0;
    });
  }

  checkCart(data:Product |undefined){
    if(data !== undefined){
      if(this.cart && this.cart.length>0){
        const index = this.cart.findIndex((e: CartItem) => e?.id === data?.id);
        return index === -1;
  
      } else {
        return true
      }
    }
    return
  }

  increase(id:number | undefined,category:string | undefined){
    if(id !== undefined && category !== undefined){
      this.store.dispatch(addToCart({id,category}))
    }
  }

  decrease(id:number | undefined,category:string | undefined){
    if(id !== undefined && category !== undefined){
      this.store.dispatch(removeFormCart({id,category}))
    }
  }

  addToCart(id: number | undefined, category: string |undefined) {
    if(id !== undefined && category !== undefined){
      this.store.dispatch(addToCart({ id, category }));
      const item = this.cart.find((e: CartItem) => e.id === id);
      
          if(item){
            this.count = item.count
          }
    }
  }

}
