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

    products: IProduct[] = [];
    total: number = 0;
    disableCheckout: boolean = false;

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
        this.productsPrice();
    }

    rmProductInCart() {
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
        this.productsPrice();
    }

    checkout() {
        if (this.disableCheckout)
            return;
        const that = this;
        this.products.forEach(product => {
            this.productService.addProductToCart(product.id, product.qtyCart).subscribe({
                next() {
                    localStorage.setItem(Product.cartLocalStorage, JSON.stringify(that.products));
                }, error(error) {
                    console.log(error);
                }
            })
        })
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
