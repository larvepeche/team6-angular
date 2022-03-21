import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: IProduct[] = [];
    page: number = 1;

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.productService.getProductsPagination(this.page).subscribe((resp: IProduct[]) => {
            this.products = resp;
            this.products.map(product => {
                product.image = this.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
            });
        });
    }

    nextPrevPage(shift: number) {
        if (shift + this.page <= 0) return;
        this.page += shift;
        this.productService.getProductsPagination(this.page).subscribe((resp: IProduct[]) => {
            this.products = resp;
            this.products.map(product => {
                product.image = this.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
            });
        });
    }

    goToPage() {
        // this.productService.getProductsPagination(this.page, () => {
        // });
    }

}
