import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { routes } from './app.routes';
import { HpService } from './service/hp.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
