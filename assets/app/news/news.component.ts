import { Component } from "@angular/core";
import {News} from './news.model';
import {User} from '../auth/user.model'
import { AuthService } from "../auth/auth.service";


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styles: [`
        .date {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class NewsComponent{

}