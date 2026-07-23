import { Product } from '../models/product';
import { Injectable } from '@angular/core';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max',
      category: 'Shoes',
      brand: 'Nike',
      price: 18500,
      rating: 4.8,
      stock: 15,
      color: 'Black',
      material: 'Mesh',
      origin: 'Vietnam',
      description: 'Comfortable running shoes for everyday use.'
    },
    {
      id: 2,
      name: 'Adidas Hoodie',
      category: 'Clothing',
      brand: 'Adidas',
      price: 7500,
      rating: 4.6,
      stock: 20,
      color: 'Grey',
      material: 'Cotton',
      origin: 'Pakistan',
      description: 'Soft cotton hoodie suitable for casual wear.'
    },
    {
      id: 3,
      name: 'Apple AirPods Pro',
      category: 'Electronics',
      brand: 'Apple',
      price: 62000,
      rating: 4.9,
      stock: 8,
      color: 'White',
      material: 'Plastic',
      origin: 'China',
      description: 'Wireless earbuds with active noise cancellation.'
    }
  ];


  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
  return this.products.find(product => product.id === id);
  }
}