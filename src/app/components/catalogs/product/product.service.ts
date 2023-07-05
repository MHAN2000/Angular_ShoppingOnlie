import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './types';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/product');
  }
  addProduct(form: FormGroup): Observable<IProduct> {
    return this.http.post<IProduct>('/api/product', form.value, httpOptions);
  }

  updateProduct(form: FormGroup, id: number) {
    return this.http.put<IProduct>(`/api/product/${id}`, form.value, httpOptions);
  }
}
