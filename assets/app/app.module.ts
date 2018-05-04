import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';
import { SignupComponent } from '../auth/signup.component';
import { routing } from './app.routing';
import { SigninComponent } from '../auth/signin.component';
import { LogoutComponent } from '../auth/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent
    ],
    imports: [BrowserModule,routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}