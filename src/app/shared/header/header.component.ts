import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems!:number

  constructor(private CartService:CartService) {

  }

  ngOnInit(): void {
    this.CartService.cartCount.subscribe(cartNumber => {
      this.cartItems = cartNumber
    })

  }

}
