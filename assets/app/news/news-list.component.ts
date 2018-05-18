import { Component, OnInit } from "@angular/core";
import {News} from './news.model';
import { NewsService } from "./news.service";


@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: [
        './news-list.component.css',
    ]
})
export class NewsListComponent implements OnInit {

    newslist: News[];

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.newsService.getNews()
            .subscribe(
                (news: News[]) => {
                    this.newslist = news;
                }
            );
    }

    // belongsToUser() {
    //     return localStorage.getItem('userId') == this.news.userId;
    // }
}