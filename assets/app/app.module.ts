import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { HeaderComponent } from './shared/header.component';
import { SignupComponent } from '../app/auth/signup.component';
import { routing } from './app.routing';
import { SigninComponent } from '../app/auth/signin.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}