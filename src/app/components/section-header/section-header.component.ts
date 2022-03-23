import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
    @Input() headerText?: string;
    @Input() showSearchBar: boolean = false;
    @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
    searchText: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    search() {
        this.onSearch.emit(this.searchText);
    }

}
