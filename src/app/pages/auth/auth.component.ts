import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    faArrowLeft = faArrowLeft;

    isLogin: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    switchAuth(switchValue: boolean) {
        this.isLogin = !switchValue;
    }
}
