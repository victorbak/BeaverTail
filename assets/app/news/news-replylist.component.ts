import { Component, OnInit } from "@angular/core";
import { NewsService } from "./news.service";
import { Reply } from "./reply.model";


@Component({
    selector: 'reply-list',
    template: `<div>
                    <news-reply [reply]="reply" *ngFor="let reply of replylist"></news-reply>
                </div>`
})
export class ReplyListComponent implements OnInit {

    replylist: Reply[];
    username: String;

    constructor(private newsService: NewsService) {}

    ngOnInit() {
       
        this.username = localStorage.getItem('username')
        this.newsService.getRepliesByName(this.username)
            .subscribe(
                (replies: Reply[]) => {
                    this.replylist = replies;
                }
            );
    }
}