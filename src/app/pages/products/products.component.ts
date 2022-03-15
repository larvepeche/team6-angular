import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    faChevronRight = faChevronRight;
    faChevronLeft = faChevronLeft;

    products: IProduct[] = [
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
