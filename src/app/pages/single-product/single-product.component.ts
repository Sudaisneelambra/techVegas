import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CommonService } from 'src/app/services/common.service';
import { selectCartItems } from 'src/app/store/item.selector';
import { CartItem } from 'src/app/interfaces/cart.interface';
import { addToCart, removeFormCart } from 'src/app/store/item.action';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

  productDetails!:Product

  cart :CartItem[]=[]
  count !:number

  constructor(private route:ActivatedRoute, private commonService:CommonService, private store:Store) {}

  ngOnInit(): void {
      this.route.params.subscribe((val)=>{
        if(val){
          const id = val['id']
          this.getSingleDetailes(id)
        }
      })
  }


  getSingleDetailes(id:number){
    setTimeout(() => {
      this.commonService.loadingboolean.next(true)
    },);
    this.commonService.getSingleProduct(id).subscribe({
      next:(res)=>{
        this.commonService.loadingboolean.next(false)
        this.productDetails = res        
        
      },
      error:(err)=>{
        this.commonService.loadingboolean.next(false)
        console.log(err)
      }
    })
      
  }

 

}
