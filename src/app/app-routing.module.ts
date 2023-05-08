import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [{
  path: 'product',
  component: ProductListComponent
},
{
  path: 'product-detail/:id',
  component: ProductDetailComponent
},
{
  path: 'product-detail2',
  component: ProductDetailComponent
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
