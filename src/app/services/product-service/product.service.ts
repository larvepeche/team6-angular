import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    apiUrl = '';

    constructor(
        private http: HttpClient
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}/api/products`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                //@ts-ignore
                "Authorization": JSON.parse(localStorage.getItem(User.userLocalStorage)).token
            }
        });
    }
}
