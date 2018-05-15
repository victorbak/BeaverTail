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

    news: News[];

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.newsService.getNews()
            .subscribe(
                (news: News[]) => {
                    this.news = news;
                }
            );
    }

}