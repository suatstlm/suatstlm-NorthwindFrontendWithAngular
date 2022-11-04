import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category } from "src/app/models/category";
import { Product } from "src/app/models/product";
import { AlertifyService, MessageType} from "src/app/services/alertify.service";
import { CartService } from "src/app/services/cart.service";
import { CategoryService } from "src/app/services/category.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./products.component.html",
})
export class ProductComponent implements OnInit {

  products: Product[];
  categories: Category[];
  currentCategory: Category;
  filterText= "";

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProdutsByCategory(params["categoryId"]);
      }else{
        this.getProduts();
      }
    })
    
    console.log(this.currentCategory);
    this.getCategories();
  }

  getProduts() {
    this.productService.getProduts().subscribe((response) => {
      this.products = response.data;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  
  getProdutsByCategory(categoryId:number) {
    this.productService.getProdutsByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) return "btn btn-warning";
    else return "btn btn-danger";
  }

  getAllCategoryClass() {
    if (!this.currentCategory) return "btn btn-warning";
    else return "btn btn-danger";
  }

  addToCart(product: Product){
    if (product.unitsInStock <= 0) {
      this.alertify.message("The product is out of stock", {
        messageType: MessageType.Error
      });
    }
    else{
      this.cartService.addToCart(product);
      this.alertify.message("The product has been successfully added to cart.", {
        messageType: MessageType.Success
      });
    }
  }

}
