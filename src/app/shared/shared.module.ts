import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    CategoriesComponent,
    ProductThumbnailComponent
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule,FormsModule

  ],
  exports: [
    HeaderComponent,FormsModule,SpinnerComponent,CategoriesComponent,ProductThumbnailComponent
  ]
})
export class SharedModule { }
