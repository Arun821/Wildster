import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ClothComponent } from './cloth/cloth.component';
import { DialogComponent } from './dialog/dialog.component';
import { HandicraftComponent } from './handicraft/handicraft.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsComponent } from './products/products.component';
import { SpicesComponent } from './spices/spices.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'products', component:ProductsComponent },
  { path:'login', component:DialogComponent },
  { path:'cart', component:CartComponent },
  { path:'handicraft', component:HandicraftComponent },
  { path:'cloth', component:ClothComponent },
  { path:'spices', component:SpicesComponent },
  { path:'new', component:NewProductComponent },
  { path:'sign', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
