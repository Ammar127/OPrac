import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccussComponent } from './ordersuccuss/ordersuccuss.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AproductsComponent } from './admin/aproducts/aproducts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    ShoppingcartComponent,
    CheckoutComponent,
    OrdersuccussComponent,
    MyordersComponent,
    AproductsComponent,
    AdminordersComponent,
    ProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'products' , component: ProductsComponent},
      {path: 'shoppingcart' , component: ShoppingcartComponent},
      {path: 'checkout' , component: CheckoutComponent},
      {path: 'ordersuccess' , component: OrdersuccussComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'admin/products' , component: AproductsComponent},
      {path: 'admin/orders' , component: AdminordersComponent},
      {path: 'my/orders' , component: MyordersComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
