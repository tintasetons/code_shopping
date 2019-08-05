import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from "@angular/router";

import {HttpClientModule} from '@angular/common/http';
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/bootstrap/modal/modal.component';

import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import {CategoryModalNewComponent} from './components/pages/category/category-modal-new/category-modal-new.component';
import {CategoryModalEditComponent} from './components/pages/category/category-modal-edit/category-modal-edit.component';
import {CategoryModalDeleteComponent} from './components/pages/category/category-modal-delete/category-modal-delete.component';

import {ProductListComponent} from './components/pages/product/product-list/product-list.component';
import {ProductModalNewComponent} from './components/pages/product/product-modal-new/product-modal-new.component';
import {ProductModalEditComponent} from './components/pages/product/product-modal-edit/product-modal-edit.component';
import {ProductModalDeleteComponent} from './components/pages/product/product-modal-delete/product-modal-delete.component';

import {UserListComponent} from './components/pages/user/user-list/user-list.component';
import {UserModalNewComponent} from './components/pages/user/user-modal-new/user-modal-new.component';
import {UserModalEditComponent} from './components/pages/user/user-modal-edit/user-modal-edit.component';
import {UserModalDeleteComponent} from './components/pages/user/user-modal-delete/user-modal-delete.component';

import {NgxPaginationModule} from "ngx-pagination";
import { NumberFormatBrPipe } from './pipes/number-format-br.pipe';
import { ProductCategoryListComponent } from './components/pages/product-category/product-category-list/product-category-list.component';
import { ProductCategoryNewComponent } from './components/pages/product-category/product-category-new/product-category-new.component';




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'categories/list', component: CategoryListComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'products/:product/categories/list', component: ProductCategoryListComponent},
  {path: 'products/list', component: ProductListComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertErrorComponent,
    ModalComponent,

    CategoryListComponent,
    CategoryModalNewComponent,
    CategoryModalEditComponent,
    CategoryModalDeleteComponent,

    ProductListComponent,
    ProductModalNewComponent,
    ProductModalEditComponent,
    ProductModalDeleteComponent,

    UserListComponent,
    UserModalNewComponent,
    UserModalEditComponent,
    UserModalDeleteComponent,

    NumberFormatBrPipe,
    ProductCategoryListComponent,
    ProductCategoryNewComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)// , {enableTracing:true})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
