import { Component, Input } from "@angular/core";
import { News } from './news.model';
import { User } from '../auth/user.model'
import { AuthService } from "../auth/auth.service";
import { NewsService } from "./news.service";
import { Router } from "@angular/router";


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
export class NewsComponent {
    @Input() news: News;

    constructor(private newsService: NewsService, private router: Router) { }

    onEdit() {
        this.newsService.editNews(this.news);
    }

    onDelete() {
        this.newsService.deleteNews(this.news)
            .subscribe(
                result => console.log(result)
            );
    }

    getDetail() {
        this.router.navigateByUrl('/news')
    }
}