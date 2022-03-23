import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { SectionHeaderComponent } from 'src/app/components/section-header/section-header.component';
import { CartComponent } from '../cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ProductCardComponent,
        ProductsListComponent,
        SectionHeaderComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        MatIconModule
    ]
})
export class MainModule { }
