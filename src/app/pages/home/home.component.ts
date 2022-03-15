import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/models/iproduct';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    faChevronRight = faChevronRight;
    faChevronLeft = faChevronLeft;

    @ViewChild("slides") slides?: ElementRef;
    @ViewChild("slideIndexes") slideIndexes?: ElementRef;
    index: number = 0;
    slideNumber: number = 3;

    products: IProduct[] = [
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
        { img: "assets/bao-bao-GREEBEtyR9Y-unsplash.jpg", name: "bao bao GREEBE", price: 50000 },
    ];

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
    }

    onClickMove(slideMove: boolean) {
        const direction = (slideMove) ? 1 : -1;
        this.index += direction;
        if (this.index < 0) {
            this.index = 0;
            return;
        }
        let reset = false;
        if (this.index >= this.slideNumber) {
            reset = true;
            this.index = 0;
        }
        this.translateSlide(direction, reset);
    }

    translateSlide(direction: number, reset: boolean) {
        if (!this.slides) return;
        const elWidth = this.slides.nativeElement.offsetWidth;
        let translateValue = 0;
        if (!reset)
            translateValue = (direction == 1) ? -1 * this.index * elWidth : (-1 * (this.index + 1) * elWidth + elWidth)
        this.renderer.setStyle(this.slides.nativeElement, 'transform', `translate(${translateValue}px,0px)`);
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
