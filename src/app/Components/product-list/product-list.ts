import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  @Input()
  products: Product[] = [];

}