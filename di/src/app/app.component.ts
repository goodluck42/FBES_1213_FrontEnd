import {Component, OnInit} from '@angular/core';
import {AppProductService, Product} from "./app.productService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppProductService]
})
//AppProductService
export class AppComponent implements OnInit {
  title = 'di';

  public products?: Product[];

  constructor(private readonly productService: AppProductService) {

  }

  public ShowAllProducts(): void
  {
    this.productService.GetAllProducts().then(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
    this.ShowAllProducts();
  }
}
