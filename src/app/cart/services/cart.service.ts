import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:BehaviorSubject<number>=new BehaviorSubject( JSON.parse(localStorage.getItem('cart')!).length);
  constructor(private http:HttpClient) { }

  purshaseCart(data: any) {
    return this.http.post('https://fakestoreapi.com/carts',data)
  }

}
