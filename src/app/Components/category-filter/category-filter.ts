import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-filter',
  imports: [FormsModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css'
})
export class CategoryFilter {

  selectedCategory = '';

  @Output()
  categoryChanged = new EventEmitter<string>();

  onCategoryChange() {
    this.categoryChanged.emit(this.selectedCategory);
  }

}