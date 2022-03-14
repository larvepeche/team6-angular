import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl(''),
        pwd: new FormControl('')
    });

    constructor() { }

    ngOnInit(): void {
    }

    onConnect() {
        console.log("submit login");
    }
}
