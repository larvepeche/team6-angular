import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
    { path: 'page', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
    { path: 'connect', component: AuthComponent },
    { path: '', redirectTo: 'connect', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
