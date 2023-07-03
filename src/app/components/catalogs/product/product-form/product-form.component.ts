import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      description: new FormControl(''),
      unitPrice: new FormControl(''),
      quantity: new FormControl('')
    });
  }
}
