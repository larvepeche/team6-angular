import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    products: IProduct[] = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');

    constructor() { }

    ngOnInit(): void {
    }

    rmProductInCart() {
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
    }
}
