import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  searchText = '';

  @Output()
  searchChanged = new EventEmitter<string>();

  onSearch() {
    this.searchChanged.emit(this.searchText);
  }

}