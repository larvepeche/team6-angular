import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logout() {
        localStorage.setItem(User.userLocalStorage, '');
        localStorage.setItem(Product.cartLocalStorage, '[]');
        this.router.navigate(['/connect']);
    }

}
