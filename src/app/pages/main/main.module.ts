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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ProductCardComponent,
        ProductsListComponent,
        SectionHeaderComponent,
        CartComponent,
        CategoryComponent,
        CategoryListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        MatIconModule,
        ReactiveFormsModule
    ]
})
export class MainModule { }
