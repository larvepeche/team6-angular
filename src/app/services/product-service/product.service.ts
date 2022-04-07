import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { UserService } from '../user-service/user.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    apiUrl = '';

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}/api/products`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": this.userService.getToken()
            }
        });
    }

    getTopProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}/api/products/top/5`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": this.userService.getToken()
            }
        });
    }

    getProductsPagination(page: number) {
        const token = this.userService.getToken();
        return combineLatest([this.getProductsAtPage(page, token), this.getProductsNb(token)]);
    }

    getProductsAtPage(page: number, token: string): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}/api/products/list?page=${page}`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": token
            }
        });
    }

    getProductsNb(token: string) {
        return this.http.get<number>(`${this.apiUrl}/api/products/count`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": token
            }
        });
    }

    getCartProducts() {
        return this.http.get<IProduct[]>(`${this.apiUrl}/api/users/panier`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": this.userService.getToken()
            }
        });
    }

    addProductToCart(productId: number, productQty: number) {
        console.log(this.userService.getToken());
        return this.http.post<any>(`${this.apiUrl}/api/users/panier/${productId}/${productQty}`, null, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": this.userService.getToken()
            }
        });
    }

    deleteProductToCart(productId: number) {
        return this.http.delete<any>(`${this.apiUrl}/api/users/panier/${productId}`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": this.userService.getToken()
            }
        });
    }
}
