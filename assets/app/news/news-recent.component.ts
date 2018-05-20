import { Component, OnInit } from "@angular/core";
import { News } from './news.model';
import { NewsService } from "./news.service";

@Component({
    selector: 'news-recent',
    template: `<div>
                    <app-news [news]="news" *ngFor="let news of recentlist"></app-news>
                </div>`
})
export class NewsRecentComponent {
    recentlist: News[];

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getRecentNews()
            .subscribe(
                (news: News[]) => {
                    this.recentlist = news;
                }
            );
    }
}