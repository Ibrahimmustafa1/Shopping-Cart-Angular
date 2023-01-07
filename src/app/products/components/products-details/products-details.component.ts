import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  loading: boolean = true;
  constructor(private ActivatedRoute: ActivatedRoute,private ProductService:ProductService) { }
  product:any
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.ProductService.getProductDetails(params.id).subscribe(product => {
        this.loading=!this.loading;
        this.product=product;
      })
    })

  }

}
