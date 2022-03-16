import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        username: new FormControl(''),
        pwd: new FormControl('')
    });

    user?: IUser;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    onConnect() {
        this.user = {
            username: this.loginForm.get('username')?.value,
            password: this.loginForm.get('pwd')?.value
        }
        this.userService.login(this.user);
        console.log("submit login");
    }
}
