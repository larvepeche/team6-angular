import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    products: IProduct[] = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
    total: number = 0;
    disableCheckout: boolean = false;

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.productsPrice();
    }

    rmProductInCart() {
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
        this.productsPrice();
    }

    checkout() {
        if (this.disableCheckout)
            return;

    }

    onQtyError(value: boolean) {
        this.disableCheckout = value;
        if (!this.disableCheckout)
            this.productsPrice();
    }

    productsPrice() {
        this.total = this.products.reduce((accum, product) => { return accum + (product.price * product.qtyCart) }, 0)
    }
}
