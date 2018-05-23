import { Component, Input } from "@angular/core";
import { Reply } from "./reply.model";

@Component({
    selector:'reply-detail',
    template: `<h1 class="top">Replies</h1>
    {{reply?.title}}
    <hr>`,
    styleUrls: [
        './news-detail.component.css'
    ]
})
export class NewsReplyDetailComponent{

    @Input() reply: Reply;
}