import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit{
  
  constructor(private route:ActivatedRoute, private commonService:CommonService){}
  
  categoryname:any
  productList:any
  temp:any

  ngOnInit(): void {

    this.route.params.subscribe((val)=>{
      if(val){
        this.categoryname = val['categoryname'];
        this.getAllProducts(this.categoryname)
      }   
    })
  }

  getAllProducts(name:string){
    setTimeout(() => {
      this.commonService.loadingboolean.next(true)
    },);
    this.commonService.getAllproductBasedOnCategoryName(name).subscribe({
      next:(res)=>{
        this.commonService.loadingboolean.next(false)
        this.productList=res
        this.temp = this.productList
        
        
      },
      error:(err)=>{
        this.commonService.loadingboolean.next(false)
        console.log(err);
        
      }
    })
  }

  search(val:string){
    if(val.trim() !== ''){
        this.productList= this.temp.filter((e:Product)=>{
          return e.title.toLowerCase().includes(val.toLowerCase())
        })
    }else{
      this.productList = this.temp
    }
    
  }

}
