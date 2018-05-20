import { Component, OnInit } from "@angular/core";
import { News } from './news.model';
import { NewsService } from "./news.service";

@Component({
    selector: 'news-popular',
    template: `<div>
                    <app-news [news]="news" *ngFor="let news of popularlist"></app-news>
                </div>`
})
export class NewsPopularComponent {
    popularlist: News[];

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getPopularNews()
            .subscribe(
                (news: News[]) => {
                    this.popularlist = news;
                }
            );
    }
}