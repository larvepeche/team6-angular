import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: IProduct[] = [];
    page: number = 1;
    productsNb: number = 1;
    paginationState: number = 0;

    constructor(
        private productService: ProductService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.displayProduct();
    }

    nextPrevPage(shift: number) {
        this.changePaginationState(shift);
        if (this.paginationState != 0) return;
        this.page += shift;
        this.displayProduct();
    }

    changePaginationState(shift: number) {
        this.paginationState = 0;
        if (this.page + shift == 0) {
            this.paginationState = -1;
        } else if (this.page + shift == Math.ceil(this.productsNb / Product.productsNbPerPage)) {
            this.paginationState = 1;
        }
    }

    displayProduct() {
        const that = this;
        this.productService.getProductsPagination(this.page).subscribe({
            next([productList, productsNb]) {
                that.products = productList;
                that.productsNb = productsNb;
                that.products.map((product: IProduct) => {
                    product.image = that.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
                });
            },
            error(error) {
                that.userService.sessErrorHandler(error);
            }
        });
    }

    search(searchValue: string) {
        console.log(searchValue);
    }

    onCategSelected(value: any) {
        console.log(value);
    }
}
