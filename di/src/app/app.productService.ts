import {ObjectId} from "mongodb";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export type Product = {
  id: number;
  quantity: number;
  price: number;
  name: string;
};

type Nullable<T> = T | null;

export interface IAppProductService {
  GetAllProducts(): Promise<Product[]>;
  GetProductById(id: ObjectId): Nullable<Product>;
  InsertProduct(product: Product): void;
}

@Injectable({
  providedIn: "root"
})
export class AppProductService implements IAppProductService {
  constructor(private readonly httpClient: HttpClient) {
  }

  async GetAllProducts(): Promise<Product[]> {
    return await fetch("https://localhost:7162/api/v1/product/all", {
      method: "GET"
    }).then(text => text.json());
  }

  GetProductById(id: ObjectId): Nullable<Product> {
    throw new Error("Not implemented");
  }

  InsertProduct(product: Product): void {
    throw new Error("Not implemented");

    // let result = await fetch("https://localhost:8080/api/v1/product", {
    //   method: "POST",
    //   body: JSON.stringify(product),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    //
    // if (result.status == 200)
    // {
    //   return;
    // }
    //
    // throw new Error("Failed to insert product.");
  }

  public Test(): Product[] {
    let products: Product[] = [{
      id: 1,
      price: 123,
      name: "Xiyar",
      quantity: 2
    }];

    // this.productService.GetAllProducts().then(data => {
    //   products = data;
    // });

    return products;
  }
}
