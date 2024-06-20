import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CapitalizePipe],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  constructor(private router:Router){}

  categories: { [key: string]: string } = {
    electronics: '/assets/istockphoto-178716575-612x612.jpg',
    jewelery: '/assets/jewels.jpg',
    menclothing : '/assets/mens.jpg',
    womenclothing: '/assets/women.jpg'
  };

  @Input() items:any


  getCategoryImage(category: string): string {
    
    switch(category.replace(/\s+/g, '').replace(/'/g, '')) {
      case 'jewelery':
        return this.categories['jewelery'];
      case 'electronics':
        return this.categories['electronics'];
      case 'mensclothing':
        return this.categories['menclothing'];
      case 'womensclothing':
        return this.categories['womenclothing'];
      default:
        return '/assets/default-image.jpg'; 
    }
  }


  gotoProductfullList(item:any){
    this.router.navigate(['/category',this.items])  
  }
}
