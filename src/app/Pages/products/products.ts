import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.services';
import { ProductList } from '../../Components/product-list/product-list';

@Component({
  selector: 'app-products',
  imports:[ProductList],
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
