import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  standalone: true,
  imports: [CommonModule,CategoryComponent],
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {



  allCategories: string[] = [];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.loadingboolean.next(true)
    },);
    this.commonService.getAllCategories().subscribe({
      next: (res: string[]) => {
        this.commonService.loadingboolean.next(false)
        this.allCategories = res;
      },
      error: (err) => {
        this.commonService.loadingboolean.next(false)
        console.log(err);
      }
    });
  }
}
