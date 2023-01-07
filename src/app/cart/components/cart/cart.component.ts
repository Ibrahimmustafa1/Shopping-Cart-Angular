import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []
  Error!:string
  quantity: number = 1
  total: number = 0;
  y = {
    name: 'hema'
  }
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      this.getCartTotalPrice()
    }
  }
  getCartTotalPrice(): number {

    this.total = 0
    for (let product of this.cartProducts) {
      if (product.quantity > 0) {
        this.total += product.price * product.quantity
      }
      else {
        alert('Product qty must be a positive number')
        product.quantity = 1;
        this.total = 0
        this.getCartTotalPrice()
        break
      }

    }
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    return this.total
  }
  deleteProduct(i: number) {
    this.cartProducts.splice(i, 1)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.getCartTotalPrice()
    this.CartService.cartCount.next(JSON.parse(localStorage.getItem('cart')!).length)

  }
  clearShoppingCart() {
    if (confirm('Are you sure you want to clear')) {
      this.cartProducts = []
      this.total = 0
      localStorage.removeItem('cart')
      this.CartService.cartCount.next(JSON.parse(localStorage.getItem('cart')!).length||0)

    }
  }
  buyCart() {
    let products = this.cartProducts.map(p => {
      return { productId: p.id, quantity: p.quantity }
    })
    let data = {
      userId: 3,
      date: Date.now(),
      products:products
    }
    this.CartService.purshaseCart(data).subscribe(res => {
    },err => {
      this.Error=err.message
    })
  }

}
