import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product-service/product.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { IBanner, UtilService } from 'src/app/services/util-service/util.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @ViewChild("slides") slides?: ElementRef;
    @ViewChild("slideIndexes") slideIndexes?: ElementRef;
    index: number = 0;
    slideNumber: number = 0;
    slideList: IBanner[] = [];

    products: IProduct[] = [];

    constructor(
        private renderer: Renderer2,
        private utilService: UtilService,
        private productService: ProductService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        const that = this;
        this.utilService.getBanner().subscribe({
            next(resp: IBanner[]) {
                that.slideList = resp;
                that.slideList.map(slide => {
                    slide.image = that.utilService.apiUrl + "/static/banner-image/" + slide.id + "-" + slide.image;
                });
                that.slideNumber = that.slideList.length;
            }, error(error) {
                that.userService.sessErrorHandler(error);
            }
        });
        this.productService.getTopProducts().subscribe({
            next(resp: IProduct[]) {
                that.products = resp;
                that.products.map(product => {
                    product.image = that.productService.apiUrl + "/static/product-image/" + product.id + "-" + product.image;
                });
            }, error(error) {
                that.userService.sessErrorHandler(error);
            }
        });
    }

    onClickMove(slideMove: boolean) {
        let direction = (slideMove) ? 1 : -1;
        this.index += direction;
        if (this.index < 0) {
            this.index = this.slideNumber - 1;
            direction = 1
        }
        let reset = false;
        if (this.index >= this.slideNumber) {
            reset = true;
            this.index = 0;
        }
        this.changeSlide(direction, reset);
    }

    changeSlide(direction: number, reset: boolean) {
        if (!this.slides) return;
        // const elWidth = this.slides.nativeElement.offsetWidth;
        // let translateValue = 0;
        // if (!reset)
        //     translateValue = (direction == 1) ? -1 * this.index * elWidth : (-1 * (this.index + 1) * elWidth + elWidth)
        // this.renderer.setStyle(this.slides.nativeElement, 'transform', `translate(${translateValue}px,0px)`);

        const el = this.slides?.nativeElement as HTMLElement;
        Array.from(el.children).forEach(element => {
            element.classList.remove("slide-active");
        });
        el.children[this.index].classList.add("slide-active");
        this.changeSlideIndex();
    }

    changeSlideIndex() {
        const el = this.slideIndexes?.nativeElement as HTMLElement;
        Array.from(el.children).forEach(element => {
            element.classList.remove("slide-i-active");
        });
        el.children[this.index].classList.add("slide-i-active");
    }
}
