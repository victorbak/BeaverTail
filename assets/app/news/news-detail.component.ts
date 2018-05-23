import { Component, OnInit, Input } from "@angular/core";
import { NewsService } from "./news.service";
import { News } from "./news.model";
import 'rxjs/add/operator/filter';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Reply } from "./reply.model";

@Component({
    selector: 'news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: [
        './news-detail.component.css'
    ]
})
export class NewsDetailComponent implements OnInit {
    // @Input() test: News

    news: News
    newsId: String
    replylist: Reply[]

    constructor(private newsService: NewsService, private router: ActivatedRoute, private route: Router) { }
    ngOnInit() {
        this.router.queryParams
            .filter(params => params.newsId)
            .subscribe(params => {
                console.log(params); // {order: "popular"}

                this.newsId = params.newsId;
                console.log(this.newsId); // popular
            })

        this.newsService.getNewsById(this.newsId)
            .subscribe((news: News) => {
                this.news = news
            })

        this.newsService.getRepliesByNewsId(this.newsId)
            .subscribe((replies: Reply[]) => {
                this.replylist = replies
            })
    }

    onReply() {
        console.log(this.newsId);
        this.route.navigate(['/news/reply'], { queryParams: { newsId: this.newsId } })
    }

    onDelete() {
        this.newsService.deleteNews(this.news)
            .subscribe(
                result => console.log(result)
            );
        this.route.navigate(['/']);

    }



}