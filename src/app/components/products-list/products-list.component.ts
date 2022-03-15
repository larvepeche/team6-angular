import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    @Input() products?: IProduct[];

    constructor() { }

    ngOnInit(): void {
    }

}
