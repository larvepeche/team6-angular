import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    categories: Array<ICategory> = [
        {
            id: 1,
            name: 'Categ 1',
            subCategories: [
                {
                    id: 2,
                    name: 'subCateg 1'
                },
                {
                    id: 3,
                    name: 'subCateg 2'
                },
                {
                    id: 4,
                    name: 'subCateg 3'
                }
            ]
        }, {
            id: 5,
            name: 'Categ 2',
            subCategories: [
                {
                    id: 6,
                    name: 'subCateg 1'
                },
                {
                    id: 7,
                    name: 'subCateg 2'
                },
                {
                    id: 8,
                    name: 'subCateg 3'
                }
            ]
        }
    ]
    selectedCategories: Array<number> = [];
    @Output() onCategSelected: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

    constructor() { }

    ngOnInit(): void {
    }

    onCheckBoxEdit(value: any, mainCategId: number) {
        this.categories.forEach(categ => {
            if (categ.id == mainCategId)
                categ.subCategories?.forEach(subCateg => {
                    this.selectedCategories = this.selectedCategories.filter(val => val != subCateg.id);
                })
        });
        this.selectedCategories = this.selectedCategories.concat(value);
        this.onCategSelected.emit(this.selectedCategories);
    }
}
