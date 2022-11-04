import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ProductComponent } from "src/app/pages/products/products.component";
import { ProductAddComponent } from "src/app/pages/product-add/product-add.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { LoginGuard } from "src/app/guards/login.guard";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "products", component: ProductComponent },
  { path: "products-add", component: ProductAddComponent, canActivate: [LoginGuard]},
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "login", component: LoginComponent}
];
