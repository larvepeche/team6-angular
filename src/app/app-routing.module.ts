import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/auth/inscription/inscription.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
    { path: 'login', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
