import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: IProduct[] = [
        { id: 1, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 2, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 3, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 4, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 5, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 6, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 7, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 8, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { id: 9, img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
