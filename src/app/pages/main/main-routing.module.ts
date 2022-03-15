import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'cart', component: CartComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
