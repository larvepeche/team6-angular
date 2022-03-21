import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { IUser } from 'src/app/models/iuser';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl = '';

    constructor(
        private http: HttpClient,
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
}
