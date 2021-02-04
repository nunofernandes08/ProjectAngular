import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component' 
import { ProductCrudComponent } from './view/product-crud/product-crud.component' 
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "product",
  component: ProductCrudComponent
},{
  path: "product-create",
  component: ProductCreateComponent
},{
  path: "product-update/:id",
  component: ProductUpdateComponent
},{
  path: "product-delete/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
