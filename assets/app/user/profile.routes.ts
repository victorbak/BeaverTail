import { Routes } from "@angular/router";
import { NewsDetailComponent } from ".././news/news-detail.component";
import { NewsListComponent } from ".././news/news-list.component";
import {News} from '.././news/news.model';
import {User} from '.././auth/user.model'
import { AuthService } from "../auth/auth.service";


export const Profile_ROUTES: Routes = [
    { path: 'posts', component: NewsListComponent },
    { path: 'replies', component: NewsListComponent },
    { path: 'newsId', component: NewsDetailComponent },

];