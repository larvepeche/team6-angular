import { Component, OnInit } from '@angular/core';
import { faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    faUser = faUser;
    faCartArrowDown = faCartArrowDown;

    constructor() { }

    ngOnInit(): void {
    }

}
