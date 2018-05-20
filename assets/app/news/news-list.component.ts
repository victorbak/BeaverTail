import { Component, OnInit } from "@angular/core";
import {News} from './news.model';
import { NewsService } from "./news.service";


@Component({
    selector: 'news-list',
    template: `<div>
                    <app-news [news]="news" *ngFor="let news of newslist"></app-news>
                </div>`
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