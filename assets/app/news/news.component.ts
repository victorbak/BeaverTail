import { Component } from "@angular/core";
import {News} from './news.model';


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