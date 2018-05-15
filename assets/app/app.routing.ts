import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/auth/signup.component";
import { SigninComponent } from "../app/auth/signin.component";
import { MainMapComponent } from "./maps/main-map.component";
import { ProfileComponent } from "./user/profile.component";
import { FormComponent } from "./news/news-input.component";
import { Profile_ROUTES } from "./user/profile.routes";




const APP_ROUTES: Routes = [
    { path: '', component: MainMapComponent, pathMatch: 'full'},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'user/profile/:username', component: ProfileComponent, children: Profile_ROUTES},
    { path: 'form', component: FormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);