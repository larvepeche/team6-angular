import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InscriptionComponent } from './pages/auth/inscription/inscription.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        InscriptionComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
