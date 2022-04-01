import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmptyError } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { IUser } from 'src/app/models/iuser';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';
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
        private productService: ProductService,
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
                that.productService.getCartProducts().subscribe({
                    next(resp: IProduct[]) {
                        resp.map((product: IProduct) => {
                            product.image = that.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
                        });
                        localStorage.setItem(Product.cartLocalStorage, JSON.stringify(resp));
                        that.router.navigate(['/page/home']);
                    }, error(error) {
                        console.log(error);
                    }
                });
            },
            error(error: EmptyError) {
                console.log('Username or password doesn\' exist', error);
            }
        });
    }
}
