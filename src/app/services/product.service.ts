import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListResponseModel } from "../models/listResponseModel";
import { Product } from "../models/product";
import { ResponseModel } from "../models/responseModel";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  
  private apiUrl = "https://localhost:5001/api/products/";

  constructor(private httpClient: HttpClient) {}

  getProduts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProdutsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  addProduct(product: Product): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product);
  }
}
