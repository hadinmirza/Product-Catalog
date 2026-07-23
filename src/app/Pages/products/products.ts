import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.services';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
