import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { HeaderComponent } from './shared/header.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete'
import { SignupComponent } from '../app/auth/signup.component';
import { routing } from './app.routing';
import { SigninComponent } from '../app/auth/signin.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AgmCoreModule } from '@agm/core'
import { MainMapComponent } from './maps/main-map.component';
import { ProfileComponent } from './user/profile.component';
import { UserInfoComponent } from './user/user-info.component';
import { FormComponent } from './news/news-input.component';
import { AgmCoreOverrideModule } from './agmcoreoverride.module';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        MainMapComponent,
        ProfileComponent,
        FormComponent,
        UserInfoComponent     
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreOverrideModule.forRoot({
            apiKey: 'AIzaSyBeWcFP4LtWiS8ckrXz1JytArU2YEXhMPc'
        }),
        Ng4GeoautocompleteModule.forRoot(),
        TagInputModule,
        BrowserAnimationsModule,

    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}