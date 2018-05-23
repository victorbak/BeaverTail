import { Component, OnInit } from "@angular/core";
import { News } from "./news.model";
import { NewsService } from "./news.service";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Reply } from "./reply.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'reply-input',
    templateUrl: './news-reply-input.component.html',
})
export class NewsReplyInputComponent{

    news: News;
    reply: Reply;
    newsId: string;

    constructor(private newsService: NewsService, private router: ActivatedRoute, private route: Router) {}
    ngOnInit() {
        this.router.queryParams
            .filter(params => params.newsId)
            .subscribe(params => {
                // console.log(params); // {order: "popular"}

                this.newsId = params.newsId;
                // console.log(this.newsId); // popular
            })
    }

    tags: string[] = []
    peopleTags: string[] = []
    govTags: string[] = []
    title: string
    synopsis: string
    url?: string
    merged: string[] = []

    errorMessages: string[] = []

    submitted = false;

    onSubmit(form: NgForm) {
        console.log(this.newsId); 
        console.log(this.title);
        this.errorMessages = []
        this.submitted = true;
        console.log(form)
        if (this.tags.length == 0 && this.govTags.length == 0 && this.peopleTags.length == 0) {
            this.errorMessages.push("Please enter at least one tag")

        }
        if (form.form.value.url) {
            var urlRegex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
            if (!urlRegex.test(form.form.value.url)) {
                this.errorMessages.push("Please enter a valid URL")
            }
        }

        //merging tags
        for(var i = 0; i < this.tags.length; i++)
        {
            this.merged[i] = this.tags[i];
        }
        for(var i = 0; i < this.govTags.length; i++)
        {
            this.merged = this.merged.concat(this.govTags[i]);
        }
        for(var i = 0; i < this.peopleTags.length; i++)
        {
            this.merged = this.merged.concat(this.peopleTags[i]);
        }

        //Creating a reply
        const reply = new Reply(
            form.value.title,
            form.value.synopsis, 
            this.merged,  
            form.value.url
        );
        this.newsService.addReply(reply, this.newsId)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
        this.route.navigate(['/news'],{queryParams: {newsId: this.newsId}} )
    }

}