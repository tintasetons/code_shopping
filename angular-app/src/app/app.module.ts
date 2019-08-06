import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt'

import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {ProductCategoryListComponent} from './components/pages/product-category/product-category-list/product-category-list.component';
import {ProductCategoryNewComponent} from './components/pages/product-category/product-category-new/product-category-new.component';
import {AuthService} from "./services/auth.service";
import {NavbarComponent} from './components/bootstrap/navbar/navbar.component';
import {RefreshTokenInterceptorService} from "./services/refresh-token-interceptor.service";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import { SortColumnComponent } from './components/common/sort-column/sort-column.component';
import { CategorySearchFormComponent } from './components/pages/category/category-search-form/category-search-form.component';


function jwtFactory(authService: AuthService) {
  return {
    whitelistedDomains: [
      new RegExp(`${environment.api.host}/*`)
    ],
    tokenGetter: () => {
      return authService.getToken();
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertErrorComponent,
    ModalComponent,
    NumberFormatBrPipe,
    NavbarComponent,
    // Category
    CategoryListComponent,
    CategoryModalNewComponent,
    CategoryModalEditComponent,
    CategoryModalDeleteComponent,
    // Product
    ProductListComponent,
    ProductModalNewComponent,
    ProductModalEditComponent,
    ProductModalDeleteComponent,
    ProductCategoryListComponent,
    ProductCategoryNewComponent,
    // User
    UserListComponent,
    UserModalNewComponent,
    UserModalEditComponent,
    UserModalDeleteComponent,
    SortColumnComponent,
    CategorySearchFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtFactory,
        deps: [AuthService]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
