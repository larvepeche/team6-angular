import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'lamba-angular';
    constructor(
        private router: Router
    ) {
        router.events.forEach((event) => {
            // if (event instanceof NavigationStart) {
            //     if (event.url.localeCompare('/connect') != 0) {
            //         if (!localStorage.getItem(User.userLocalStorage)) {
            //             this.router.navigate(['/connect']);
            //         }
            //     }
            // }

            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
}
