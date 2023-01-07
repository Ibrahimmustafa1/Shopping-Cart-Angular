import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() outputCategory=new EventEmitter()
  constructor() { }
  category: string = 'All'
  categories = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
  ngOnInit(): void {
  }
  getProductsByCategory(){
    console.log(this.category)
    this.outputCategory.emit(this.category)
  }

}
