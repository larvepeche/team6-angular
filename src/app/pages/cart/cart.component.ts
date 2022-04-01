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

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.productService.getCartProducts().subscribe({
            next(resp) {
                console.log(resp);
            }, error(error) {
                console.log(error);
            }
        });
    }

    rmProductInCart() {
        this.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
    }
}
