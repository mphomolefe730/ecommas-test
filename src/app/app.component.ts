import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(
    private productService:ProductService,
  ){}

  ngOnInit(): void {
    this.productService.ngOnInit();
  }

}
