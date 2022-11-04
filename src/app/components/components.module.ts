import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CartSummaryComponent } from "../pages/cart-summary/cart-summary.component";


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, CartSummaryComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, CartSummaryComponent]
})
export class ComponentsModule {}
