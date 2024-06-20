import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFormCart } from 'src/app/store/item.action';
import { Router } from '@angular/router';
import { selectCartItems } from 'src/app/store/item.selector';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  @Input() data: any;
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

  cart:any
  count =0 

  ngOnInit(): void {
    this.store.pipe(select(selectCartItems)).subscribe((cartItems) => {
      this.cart = cartItems; 
      const item = cartItems.find((e: any) => e.id === this.data.id);
      this.count = item ? item.count : 0;
    });
  }

  addToCart(id: number, category: string) {
    this.store.dispatch(addToCart({ id, category }));
    const item = this.cart.find((e: any) => e.id === id);
    
        if(item){
          this.count = item.count
        }
  }

  gotToSingleDetails(id: number) {
    this.router.navigate(['singleProduct', id]);
  }

  checkCart(data:any){
    if(this.cart && this.cart.length>0){
      const index = this.cart.findIndex((e: any) => e.id === data.id);
      return index === -1;

    } else {
      return true
    }

    return 
  }

  increase(id:any,category:any){
    this.store.dispatch(addToCart({id,category}))
  }

  decrease(id:any,category:any){
    this.store.dispatch(removeFormCart({id,category}))
  }


}
