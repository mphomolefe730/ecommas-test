import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewProductService {

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  async viewProduct(productId:string,productName:string){
    this.productService.addToRecentlyViewedProduct(productId);
    const productNameFormated = productName.split(' ').join('-');
    this.router.navigate([`product/${productNameFormated}/pd/${productId}`]);
  }
}
