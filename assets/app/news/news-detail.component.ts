import { Component, OnInit, Input } from "@angular/core";
import { NewsService } from "./news.service";
import { News } from "./news.model";
import 'rxjs/add/operator/filter';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Reply } from "./reply.model";
import { StorageService } from "../shared/storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: [
        './news-detail.component.css'
    ]
})
export class NewsDetailComponent implements OnInit {
    // @Input() reply: Reply

    news: News
    newsId: String
    replylist: Reply[]
    reply: Reply;
    username: String

    constructor(private newsService: NewsService,
        private storageService: StorageService,
        private authService: AuthService,
        private router: ActivatedRoute,
        private route: Router) { }
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
                console.log(this.news); // popular

            })

        this.newsService.getRepliesByNewsId(this.newsId)
            .subscribe((replies: Reply[]) => {
                this.replylist = replies
            })

        if (this.isLoggedIn()) {
            this.username = localStorage.getItem('username')
        }
        this.storageService.watchStorage().subscribe((data: string) => {
            this.username = localStorage.getItem('username')
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

    onReplyDelete(id : string) {
        console.log(id)
        for(var i = 0; i < this.replylist.length; i++) {
            if(id == this.replylist[i].replyId) {
                this.reply = this.replylist[i];
            }
        }
        console.log(this.reply);

        this.newsService.deleteReply(this.reply)
            .subscribe(
                result => console.log(result)
            );
            this.route.navigateByUrl('/');
        }

                    
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    belongsToUser() {
        if (this.news) {
            return this.news.username == this.username
        }
        return false
    }
}