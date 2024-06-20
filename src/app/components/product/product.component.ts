import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/store/item.action';
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

  ngOnInit(): void {
      this.store.select(selectCartItems).subscribe((val)=>{
        if(val&& val.length>0){
          this.cart=val
        }
      })
  }

  addToCart(id: number, category: string) {
    this.store.dispatch(addToCart({ id, category }));
  }

  gotToSingleDetails(id: number) {
    this.router.navigate(['singleProduct', id]);
  }

  checkCart(data:any){
    console.log(this.cart);
    
    return false
  }
}
