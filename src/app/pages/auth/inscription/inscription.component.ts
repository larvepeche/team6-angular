import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
    inscriptionForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        pwd: new FormControl(''),
        confPwd: new FormControl('')
    });
    constructor() { }

    ngOnInit(): void {
    }

    onConnect() {

    }
}
