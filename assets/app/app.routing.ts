import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/auth/signup.component";
import { SigninComponent } from "../app/auth/signin.component";
import { MainMapComponent } from "./maps/main-map.component";
import { ProfileComponent } from "./user/profile.component";
import { FormComponent } from "./news/news-input.component";
import { Profile_ROUTES } from "./user/profile.routes";
import { NewsDetailComponent } from "./news/news-detail.component";

import { aboutUs } from "./aboutus/about-us.component";

import { NewsReplyComponent } from "./news/news-reply.component";
import { NewsReplyInputComponent } from "./news/news-reply-input.component";





const APP_ROUTES: Routes = [
    { path: '', component: MainMapComponent, pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'user/profile/:username', component: ProfileComponent, children: Profile_ROUTES },
    { path: 'form', component: FormComponent },
    { path: 'news', component: NewsDetailComponent },
    { path: 'aboutus', component: aboutUs },
    { path: 'news/reply', component: NewsReplyInputComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);