import { Component, Input } from "@angular/core";
import { News } from './news.model';
import { User } from '../auth/user.model'
import { AuthService } from "../auth/auth.service";
import { NewsService } from "./news.service";
import { Router } from "@angular/router";
import { NewsDetailComponent } from "./news-detail.component";


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: [
        './news.component.css'
    ]
})
export class NewsComponent {
    fullImagePath: string;
    @Input() news: News;

    constructor(private newsService: NewsService, private router: Router) {
    this.fullImagePath = '/assets/images/tag.png'
    }

    
    ngOnInit() {
    }

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
        this.router.navigate(['/news'], { queryParams: { newsId: this.news.newsId } })
    }

}