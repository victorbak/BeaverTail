import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../auth/signup.component";
import { SigninComponent } from "../auth/signin.component";
import { LogoutComponent } from "../auth/logout.component";

const APP_ROUTES: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent},
    { path: 'logout', component: LogoutComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);