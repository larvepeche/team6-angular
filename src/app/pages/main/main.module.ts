import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ]
})
export class MainModule { }
