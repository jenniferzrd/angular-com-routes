import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'cart', component: CartComponent} 
];