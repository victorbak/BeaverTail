import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { HeaderComponent } from './shared/header.component';
import { SignupComponent } from '../app/auth/signup.component';
import { routing } from './app.routing';
import { SigninComponent } from '../app/auth/signin.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AgmCoreModule } from '@agm/core'
import { MainMapComponent } from './maps/main-map.component';
import { FormComponent } from './news/news-input.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        MainMapComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBeWcFP4LtWiS8ckrXz1JytArU2YEXhMPc'
        }),
        MDBBootstrapModule.forRoot(),
        // NgbModalModule.forRoot(),
   
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

}