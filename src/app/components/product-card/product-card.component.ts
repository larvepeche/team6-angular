import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

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
    @Input() cart: boolean = false;

    @Output() qtyError: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private productService: ProductService
    ) { }

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
        const that = this;
        this.productService.addProductToCart(this.product.id, this.product.qtyCart).subscribe({
            next() {
                that.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
                //@ts-ignore
                that.products.push(that.product);
                localStorage.setItem(Product.cartLocalStorage, JSON.stringify(that.products));
                that.isInCart = true;
            }, error(error) {
                console.log(error);
            }
        })
    }

    removeToCart() {
        if (!this.product) return;
        let index = this.productExistInCart();
        if (index < 0)
            return;
        const that = this;
        this.productService.deleteProductToCart(this.product.id).subscribe({
            next() {
                that.products = <IProduct[]>JSON.parse(localStorage.getItem(Product.cartLocalStorage) || '[]');
                that.products.splice(index, 1);
                localStorage.setItem(Product.cartLocalStorage, JSON.stringify(that.products));
                that.isInCart = false;
                that.removeProductInCart.emit();
            }, error(error) {
                console.log(error);
            }
        })
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

    onProductQtyChange() {
        //@ts-ignore
        if (this.product?.quantity - this.product?.qtyCart < 0 || this.product?.qtyCart <= 0)
            return this.qtyError.emit(true);
        this.qtyError.emit(false);
    }
}
