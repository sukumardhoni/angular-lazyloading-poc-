import { ProductsListComponent } from "./products-list/products-list.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsCreateComponent } from './products-create/products-create.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductsListComponent, ProductsDetailsComponent, ProductsCreateComponent]
})
export class ProductsModule {}
