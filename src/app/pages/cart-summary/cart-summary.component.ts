import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/models/cartItem";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[]= [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCart();
  }

  listCart() {
    this.cartItems = this.cartService.listCart();
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }
}
