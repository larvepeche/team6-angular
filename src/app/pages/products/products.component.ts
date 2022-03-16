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

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(resp => {
            this.products = resp;
            this.products.map(product => {
                product.image = this.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
            });
        })
    }

}
