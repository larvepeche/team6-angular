import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ICategory } from 'src/app/models/icategory';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    subCategories: Array<any> = [];
    @Input() category: ICategory = {
        id: 1,
        name: 'categ',
        subCategories: []
    };

    @Output() onCheckBoxEdit: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private elRef: ElementRef
    ) { }

    ngOnInit(): void {
    }

    onCheckboxChange(event: any) {
        let elMainCateg = <HTMLInputElement>this.elRef.nativeElement.querySelector(`#main-categ${this.category.id}`);
        if (event.target.checked) {
            this.subCategories.push(event.target.value);
            elMainCateg.checked = true;
        } else {
            this.subCategories = this.subCategories.filter(val => val != event.target.value);
            if (this.subCategories.length == 0) {
                elMainCateg.checked = false;
            }
        }
        this.emitValue();
    }

    onCheckboxAllChange(event: any) {
        if (this.subCategories.length == 0) {
            this.elRef.nativeElement.querySelectorAll(`.sub-categ-input${this.category.id}`).forEach((el: HTMLInputElement) => {
                el.checked = true;
            })
            // @ts-ignore
            this.subCategories = this.category.subCategories.map(el => el.id);
        } else {
            this.elRef.nativeElement.querySelectorAll(`.sub-categ-input${this.category.id}`).forEach((el: HTMLInputElement) => {
                el.checked = false;
            })
            this.subCategories = [];
        }
        this.emitValue();
    }
    emitValue() {
        this.onCheckBoxEdit.emit(this.subCategories);
    }
}
