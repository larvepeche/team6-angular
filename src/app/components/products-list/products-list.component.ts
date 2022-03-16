import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    @Input() products?: IProduct[];
    @Output() rmProductInCart = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    removeProductInCart() {
        this.rmProductInCart.emit();
    }
}
