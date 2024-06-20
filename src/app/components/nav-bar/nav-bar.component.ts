import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule } from '@angular/material/badge'
import { Store } from '@ngrx/store';
import { selectCartItems } from 'src/app/store/item.selector';
import { CartItem } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatBadgeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  count=0
  cartItem:any
  likeBoolean:boolean= false

  constructor(private store:Store){
    this.cartItem= store.select(selectCartItems)
  }

  ngOnInit(): void {
    this.cartItem.subscribe((val:any)=>{
      
      if(val){
        const ct = val.reduce((acc:any,curr:CartItem)=>{
            return acc +=curr.count
        },0)
        this.count = ct
      }
    })
  }

  like(){
    this.likeBoolean = !this.likeBoolean
  }

  
}
