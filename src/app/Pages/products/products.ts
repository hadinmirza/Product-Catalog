import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.services';
import { ProductList } from '../../Components/product-list/product-list';
import { SearchBar } from '../../Components/search-bar/search-bar';
import { CategoryFilter } from '../../Components/category-filter/category-filter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports:[ProductList,SearchBar,CategoryFilter],
  templateUrl: './products.html',
  styleUrl: './products.css',
}) 
export class Products implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText = '';
  selectedCategory = '';
  sortOption = '';
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  this.products = this.productService.getProducts();
  this.applyFilters();
  }
  searchProducts(searchText: string) {
  this.searchText = searchText;
  this.applyFilters();
}

filterProducts(category: string) {
  this.selectedCategory = category;
  this.applyFilters();
}

sortProducts(event: Event) {
  this.sortOption = (event.target as HTMLSelectElement).value;
  this.applyFilters();
}
applyFilters() {

  this.filteredProducts = this.products.filter(product => {

    const matchesSearch =
      product.name.toLowerCase().includes(this.searchText.toLowerCase());

    const matchesCategory =
      this.selectedCategory === '' ||
      product.category === this.selectedCategory;

    return matchesSearch && matchesCategory;

  });

  switch(this.sortOption){

    case 'priceLow':
      this.filteredProducts.sort((a,b)=>a.price-b.price);
      break;

    case 'priceHigh':
      this.filteredProducts.sort((a,b)=>b.price-a.price);
      break;

    case 'rating':
      this.filteredProducts.sort((a,b)=>b.rating-a.rating);
      break;

    case 'name':
      this.filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));
      break;
  }
 }
}
