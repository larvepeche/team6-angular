import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: IProduct[] = [
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
