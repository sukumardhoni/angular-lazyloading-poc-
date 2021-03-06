import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "customers",
    loadChildren: "app/customers/customers.module#CustomersModule"
  },
  {
    path: "orders",
    loadChildren: "app/orders/orders.module#OrdersModule"
  },
  {
    path: "products",
    loadChildren: "app/products/products.module#ProductsModule"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
