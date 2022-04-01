import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmptyError } from 'rxjs';
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
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onConnect() {
        const that = this;
        this.user = {
            username: this.loginForm.get('username')?.value,
            password: this.loginForm.get('pwd')?.value
        }
        this.userService.login(this.user).subscribe({
            next() {
                that.router.navigate(['/page/home']);
            },
            error(error: EmptyError) {
                console.log('Username or password doesn\' exist', error);
            }
        });
    }
}
