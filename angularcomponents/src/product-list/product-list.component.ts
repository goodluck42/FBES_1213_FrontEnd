import {Component} from '@angular/core';
import {Input} from "@angular/core";

class Product {
  public _id?: string;

  constructor(private _name: string,
              private _price: number,
              private _quantity: number
  ) {
  }

  public get Name() {
    return this._name;
  }

  public get Price() {
    return this._price;
  }

  public get Quantity() {
    return this._quantity;
  }

  public toString(): string {
    return `${this.Name} | ${this.Price} | ${this.Quantity}`;
  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  private _products: Product[];

  constructor() {
    this._products = [];
  }

  public GetProducts(): Product[] {
    //fetch()

    return this._products;
  }

  @Input()
  public CurrentName?: string;

  @Input()
  public CurrentPrice?: number;

  @Input()
  public CurrentQuantity?: number;

  public AddProduct(): void {
    let product = new Product(
      this.CurrentName as string,
      this.CurrentPrice as number,
      this.CurrentQuantity as number
    );

    fetch("http://localhost:8080/api/v1/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then((response) => {
      this._products.push(product);
    });




  }
}
