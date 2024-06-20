import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  loadingboolean = new BehaviorSubject(false)


  getAllCategories():Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }

  getAllproductBasedOnCategoryName(name:any):Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products/category/${name}`)
  }

  getSingleProduct(id:number):Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
