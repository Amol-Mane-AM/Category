 
// src/app/components/category/category.component.ts
import { Component, OnInit } from '@angular/core';
 //import { CategoryService } from '../services/category-service.service';
import { CategoryService } from '../services/category-service.service';
import { Category } from '../models/category.mode';

  
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})


export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { categoryName: '', description: '', status: true };

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
  }

  createCategory(): void {
    if (!this.newCategory.categoryName) return;
    this.categoryService.createCategory(this.newCategory).subscribe(() => {
      this.newCategory = { categoryName: '', description: '', status: true };
      this.loadCategories();
    });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => this.loadCategories());
  }
}