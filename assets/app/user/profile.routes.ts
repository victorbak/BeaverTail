import { Routes } from "@angular/router";
import { NewsListComponent } from ".././news/news-list.component";
import {News} from '.././news/news.model';
import {User} from '.././auth/user.model'
import { AuthService } from "../auth/auth.service";
import { NewsReplyComponent } from "../news/news-reply.component";
import { ReplyListComponent } from "../news/news-replylist.component";


export const Profile_ROUTES: Routes = [
    { path: 'posts', component: NewsListComponent },
    { path: 'replies', component: ReplyListComponent }
];