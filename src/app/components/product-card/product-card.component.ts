import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input() product?: IProduct;
    @Output() removeProductInCart = new EventEmitter();
    isInCart: boolean = false;
    products: IProduct[] = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');

    constructor() { }

    ngOnInit(): void {
        if (this.productExistInCart() >= 0) {
            this.isInCart = true;
        }
    }

    addToCart() {
        if (!this.product) return;
        if (this.productExistInCart() >= 0) {
            this.isInCart = true;
            return;
        }
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
        this.products.push(this.product);
        localStorage.setItem(Product.cartLocalStorage, JSON.stringify(this.products));
        console.log(localStorage.getItem(Product.cartLocalStorage));
        this.isInCart = true;
    }

    removeToCart() {
        if (!this.product) return;
        let index = this.productExistInCart();
        if (index < 0)
            return;
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
        this.products.splice(index, 1);
        localStorage.setItem(Product.cartLocalStorage, JSON.stringify(this.products));
        this.isInCart = false;
        console.log(localStorage.getItem(Product.cartLocalStorage));
        this.removeProductInCart.emit();
    }

    productExistInCart(): number {
        if (!this.product) return -1;
        let index = -1;
        this.products.forEach((product, i) => {
            // @ts-ignore
            if (this.product.id == product.id) {
                index = i;
                return;
            }
        });
        return index;
    }
}
