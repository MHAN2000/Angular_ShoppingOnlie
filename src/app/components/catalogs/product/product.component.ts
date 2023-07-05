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
  productModal: boolean = false;
  productForm: FormGroup;
  product!: IProduct;
  creating: boolean = true;

  constructor(
    private productService: ProductService
  ) {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      description: new FormControl(''),
      unitPrice: new FormControl(''),
      quantity: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Show a loading spinner
    Swal.showLoading();
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      Swal.close();
    }, (err) => Swal.fire('Oops...', 'Ha ocurrido un error', 'error'));
  }

  showCreatingModal(): void {
    this.product = {} as IProduct;
    this.creating = true;
    this.productModal = true;
  }

  showEditingModal(product: IProduct): void {
    this.product = product;
    this.creating = false;
    this.productModal = true;
  }

  saveProduct(product: IProduct): void {
    // Check if it is creating
    if (this.creating) {
      // Create product
      this.productService.addProduct(this.productForm).subscribe(product => {
        // Add the just created product to the products array
        this.products = [...this.products, product];
        // Close the modal
        this.productModal = false;
        Swal.fire('Success', 'The product has been added successfully', 'success');
      }, err => Swal.fire('Error', `An error has ocurred, ${err}`, 'error'));
      return;
    }
    // Update product
    this.productService.updateProduct(this.productForm, product.id).subscribe(product => {
      // Find the index
      const index = this.products.findIndex(p => p.id === product.id);
      // Update the products array
      this.products[index] = product;
      // Close the modal
      this.productModal = false;
      Swal.fire('Success', 'The product has been updated successfully', 'success');
    })
  }
}
