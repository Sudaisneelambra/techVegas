import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Techvagas';
  bool:any
  constructor (private commonService:CommonService) {}

  ngOnInit(): void {
    this.commonService.loadingboolean.subscribe((val)=>{
      this.bool= val
    })
  }

}
