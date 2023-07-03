import { Component } from '@angular/core';
import { IProduct } from './types';
import { ProductService } from './product.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: IProduct[] = [];
  productCreatingModal: boolean = false;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    }, (err) => Swal.fire('Oops...', 'Ha ocurrido un error', 'error'));
  }

  showCreatingModal(): void {
    this.productCreatingModal = true;
  }
}
