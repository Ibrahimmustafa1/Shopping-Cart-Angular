import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: any
  @Output() cartProduct: EventEmitter<any> = new EventEmitter
  isAdd: boolean = true
  quantity: number=1
  constructor() { }

  ngOnInit(): void {
  }
  addTocart(product: any): void {
    if (this.quantity > 0) {
      product.quantity = this.quantity
      this.cartProduct.emit(product);
    }
    else {
      alert("quantity must be greater than zero")
    }

  }

}
