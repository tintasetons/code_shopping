import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';

import {Route, RouterModule, Routes} from "@angular/router";

// import {AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { CategoryNewModalComponent } from './components/pages/category/category-new-modal/category-new-modal.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'categories/list', component: CategoryListComponent},
  {path: '', redirectTo: '/login',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryListComponent,
    AlertErrorComponent,
    ModalComponent,
    CategoryNewModalComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)// , {enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
