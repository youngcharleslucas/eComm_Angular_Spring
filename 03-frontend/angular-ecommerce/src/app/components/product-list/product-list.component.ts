import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.listProduct();
  }

  listProduct() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
