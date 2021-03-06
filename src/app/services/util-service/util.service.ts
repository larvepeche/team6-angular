import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/iuser';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

export interface IBanner {
    id: number;
    image: string;
    textContent: string;
    slideOrder: number;
}


@Injectable({
    providedIn: 'root'
})
export class UtilService {
    apiUrl = '';

    constructor(
        private http: HttpClient
    ) {
        this.apiUrl = environment.apiUrl;
    }
    getBanner(): Observable<IBanner[]> {
        return this.http.get<IBanner[]>(`${this.apiUrl}/api/banners`, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                //@ts-ignore
                "Authorization": JSON.parse(localStorage.getItem(User.userLocalStorage)).token
            }
        });
    }
}
