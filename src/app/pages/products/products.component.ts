import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

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
        private productService: ProductService
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
        this.productService.getProductsPagination(this.page).subscribe(([productList, productsNb]) => {
            this.products = productList;
            this.productsNb = productsNb;
            this.products.map((product: IProduct) => {
                product.image = this.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
            });
        });
    }

    search(searchValue: string) {
        console.log(searchValue);
    }
}
