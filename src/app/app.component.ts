import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: any[] = [];
 title = 'MyApp';
  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
