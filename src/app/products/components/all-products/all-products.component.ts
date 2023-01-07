import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productService: ProductService, private CartService: CartService) { }
  products!: any[]
  cartProducts: any[] = []

  loading: boolean = true
  Error!:string
  selectedCategory: any
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.loading = !this.loading;
    },
    err => {
      this.loading = !this.loading;
      this.Error=err.message
      console.log(err)
    })

  }
  getProductsByCategory(category: string) {
    this.loading = !this.loading;
    this.selectedCategory = category;
    this.productService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
      this.loading = !this.loading;
    },
      err => {
        this.loading = !this.loading;
        this.Error=err.message
        console.log(err)
      })
  }
  addToCart(product: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(p => p.id === product.id)
      if (exist) {
        alert('product already exists')
      }
      else {
        this.cartProducts.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    }
    else {
      this.cartProducts.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }

    this.CartService.cartCount.next(JSON.parse(localStorage.getItem('cart')!).length)
  }
}
