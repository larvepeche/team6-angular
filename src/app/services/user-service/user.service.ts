import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { IUser } from 'src/app/models/iuser';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product-service/product.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl = '';

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.apiUrl = environment.apiUrl;
    }

    login(user: IUser) {
        const reqData = {
            username: user.username,
            password: user.password
        }
        return this.http.post<any>(`${this.apiUrl}/api/login`, JSON.stringify(reqData), {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }
        }).pipe(first(resp => {
            const user: IUser = {
                username: resp.username,
                token: `${resp.token_type} ${resp.access_token}`,
            };
            localStorage.setItem(User.userLocalStorage, JSON.stringify(user));
            return true;
        }));
    }

    sessErrorHandler(error: any) {
        if (error?.status == 401) {
            this.router.navigate(['/connect']);
        }
    }

    getToken() {
        const userStorage = JSON.parse(localStorage.getItem(User.userLocalStorage) || 'null');
        return userStorage ? userStorage.token : "";
    }
}
