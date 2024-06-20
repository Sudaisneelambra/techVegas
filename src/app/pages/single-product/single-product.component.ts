import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

  productDetails:any

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

  constructor(private route:ActivatedRoute, private commonService:CommonService) {}

  ngOnInit(): void {
      this.route.params.subscribe((val)=>{
        if(val){
          const id = val['id']
          this.getSingleDetailes(id)
        }
      })
  }


  getSingleDetailes(id:any){
    setTimeout(() => {
      this.commonService.loadingboolean.next(true)
    },);
    this.commonService.getSingleProduct(id).subscribe({
      next:(res)=>{
        this.commonService.loadingboolean.next(false)
        this.productDetails = res
        console.log(this.productDetails);
        
      },
      error:(err)=>{
        this.commonService.loadingboolean.next(false)
        console.log(err)
      }
    })
      
  }

}
