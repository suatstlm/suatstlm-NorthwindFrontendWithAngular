import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import {
  AlertifyService,
  MessageType,
} from "src/app/services/alertify.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.createProductAddFroms();
  }

  createProductAddFroms() {
    this.productAddForm = this.formBuilder.group({
      categoryId: ["", Validators.required],
      productName: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      unitPrice: ["", Validators.required],
    });
  }

  addProduct() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(productModel).subscribe(
        (response) => {
          this.alertify.message(response.message + "Product added", {
            messageType: MessageType.Success,
          });}
        // },
        // (responseError) => {
        //   if (responseError.error.Errors.length > 0) {
        //     for (let i = 0; i < responseError.error.Errors.length; i++) {
        //       this.alertify.message(
        //         responseError.error.Errors[i].ErrorMessage,
        //         {
        //           messageType: MessageType.Error,
        //         }
        //       );
        //     }
        //   }
        // }
      );
    } else {
      this.alertify.message("Your form is miss!", {
        messageType: MessageType.Error,
      });
    }
  }
}
