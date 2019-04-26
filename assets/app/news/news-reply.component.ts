import { Component, Input } from "@angular/core";
import { Reply } from "./reply.model";
import { NewsService } from "./news.service";
import { Router } from "@angular/router";

@Component({
    selector: 'news-reply',
    templateUrl: './news-reply.component.html',
    styleUrls: [
        './news.component.css'
    ]})
export class NewsReplyComponent{
    @Input() reply: Reply;

    constructor(private newsService: NewsService, private router: Router) { }
    // onDelete() {
    //     this.newsService.deleteNews(this.news)
    //         .subscribe(
    //             result => console.log(result)
    //         );
    // }

    getDetail() {
        this.router.navigate(['/news'],{queryParams: {newsId: this.reply.newsId}} )
    }
}