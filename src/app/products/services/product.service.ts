import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products')
  }
  getProductsByCategory(category: string): Observable<any> {
    if (category === 'All') {
      return this.http.get('https://fakestoreapi.com/products')
    }
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }
  getProductDetails(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
