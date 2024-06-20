import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {

    this.route.params.subscribe((val)=>{
      if(val){
        this.categoryname = val['categoryname'];
        this.getAllProducts(this.categoryname)
      }   
    })
  }

  getAllProducts(name:any){
    setTimeout(() => {
      this.commonService.loadingboolean.next(true)
    },);
    this.commonService.getAllproductBasedOnCategoryName(name).subscribe({
      next:(res)=>{
        this.commonService.loadingboolean.next(false)
        this.productList=res
        console.log(res);
        
      },
      error:(err)=>{
        this.commonService.loadingboolean.next(false)
        console.log(err);
        
      }
    })
  }

}
