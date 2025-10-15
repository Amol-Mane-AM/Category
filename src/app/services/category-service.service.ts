import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.mode';

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {
  
  deleteCategory(id: number): Observable<any> {
  // Construct the URL for the specific category to delete
  const url = `${this.apiUrl}/${id}`; 
  
  // Send the HTTP DELETE request. 
  // It returns an Observable, which the component will subscribe to.
  // We use <any> for the type if the API returns a simple status or no body.
  return this.http.delete<any>(url);
}

 createCategory(category: Category): Observable<Category> {
  return this.http.post<Category>(this.apiUrl, category); 
}

  getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl); // Or similar API call
}

  private apiUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  // // Fetch all products
  // getProducts(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  // // Fetch a product by id
  // getProductById(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }

  // // Create a new product
  // createProduct(product: any): Observable<any> {
  //   return this.http.post(this.apiUrl, product);
  // }

  // // Update a product
  // updateProduct(id: number, product: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, product);
  // }

  // // Delete a product
  // deleteProduct(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}