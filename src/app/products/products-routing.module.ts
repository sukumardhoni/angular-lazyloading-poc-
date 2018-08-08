import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsCreateComponent } from "./products-create/products-create.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent,
    children: [
      {
        path: "",
        children: [
          {
            path: "create",
            component: ProductsCreateComponent
          },
          {
            path: "detail",
            component: ProductsDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
