import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        if (!localStorage.getItem(User.userLocalStorage)) {
            this.router.navigate(['/connect']);
        }
    }

}
