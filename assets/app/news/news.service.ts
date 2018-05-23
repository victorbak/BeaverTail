import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { News } from "./news.model"
import { Reply } from "./reply.model"
import "rxjs/Rx";
import { Observable } from "rxjs"
import { error } from "util";
import { User } from "../auth/user.model";
import { URL } from "../../../env.js"
import { ErrorService } from "../errors/error.service";
import { ReplyListComponent } from "./news-replylist.component";
var dateFormat = require('dateformat');

@Injectable()
export class NewsService {
    private stories: News[] = [];
    private replies: Reply[] = [];
    newsIsEdit = new EventEmitter<News>();

    constructor(private http: Http, private errorService : ErrorService) { }

    addNews(news: News) {
        const body = JSON.stringify(news);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(URL + '/api/news' + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const news = new News(result.obj.title,
                    result.obj.synopsis,
                    result.obj.tags,
                    result.obj.replyCount,
                    result.obj.url,
                    result.obj.longitude,
                    result.obj.latitude,
                    result.obj.dateFrom,
                    result.obj.dateTo,
                    result.obj.creationDate,
                    result.obj._id,
                    result.obj.user.id,
                    result.obj.user.username
                );
                this.stories.push(news);
                return news;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    addReply(reply: Reply, newsId: string) {
        const body = JSON.stringify(reply);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(URL + '/api/news/' + newsId + '/' + 'reply' + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const reply = new Reply(
                    result.obj.title,
                    result.obj.synopsis,
                    result.obj.tags,
                    result.obj.verify,
                    result.obj.url,
                    result.obj._id,
                    newsId,
                    result.obj.user.id,
                    result.obj.user.username,
                    result.obj.creationDate
                );
                this.replies.push(reply);
                return reply;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getNews() {
        return this.http.get(URL + '/api/news')
            .map((response: Response) => {
                const stories = response.json().obj;
                let transformedNews: News[] = [];
                for (let news of stories) {
                    transformedNews.push(new News(
                        news.title,
                        news.synopsis,
                        news.tags,
                        news.replyCount,
                        news.url,
                        news.longitude,
                        news.latitude,
                        dateFormat(news.dateTo),
                        dateFormat(news.dateFrom),
                        dateFormat(news.creationDate),
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getPopularNews(){
        return this.http.get(URL + '/api/news/popular')
            .map((response: Response) => {
                const stories = response.json().obj;
                let transformedNews: News[] = [];
                for (let news of stories) {
                    transformedNews.push(new News(
                        news.title,
                        news.synopsis,
                        news.tags,
                        news.replyCount,
                        news.url,
                        news.longitude,
                        news.latitude,
                        dateFormat(news.dateTo),
                        dateFormat(news.dateFrom),
                        dateFormat(news.creationDate),
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getRecentNews(){
        return this.http.get(URL + '/api/news/new')
            .map((response: Response) => {
                const stories = response.json().obj;
                let transformedNews: News[] = [];
                for (let news of stories) {
                    transformedNews.push(new News(
                        news.title,
                        news.synopsis,
                        news.tags,
                        news.replyCount,
                        news.url,
                        news.longitude,
                        news.latitude,
                        dateFormat(news.dateTo),
                        dateFormat(news.dateFrom),
                        dateFormat(news.creationDate),
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getNewsByName(username: String) {
        return this.http.get(URL + '/api/news/user/' + username)
            .map((response: Response) => {
                const stories = response.json().obj;
                let transformedNews: News[] = [];
                for (let news of stories) {
                    transformedNews.push(new News(
                        news.title,
                        news.synopsis,
                        news.tags,
                        news.replyCount,
                        news.url,
                        news.longitude,
                        news.latitude,
                        dateFormat(news.dateTo),
                        dateFormat(news.dateFrom),
                        dateFormat(news.creationDate),
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getNewsById(newsId: String) {
        return this.http.get(URL + '/api/news/' + newsId)
            .map((response: Response) => {
                const news = response.json().obj;
                let transformedNews: News;
                transformedNews = new News(
                    news.title,
                    news.synopsis,
                    news.tags,
                    news.replyCount,
                    news.url,
                    news.longitude,
                    news.latitude,
                    dateFormat(news.dateTo),
                    dateFormat(news.dateFrom),
                    dateFormat(news.creationDate),
                    news._id,
                    news.user.id,
                    news.user.username);
                return transformedNews;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    
    //Get Replies
    getReplies() {
        return this.http.get(URL + '/api/news/reply')
            .map((response: Response) => {
                const replies = response.json().obj;
                let transformedReplies: Reply[] = [];
                for (let reply of replies) {
                    transformedReplies.push(new Reply(
                        reply.title,
                        reply.synopsis,
                        reply.tags,
                        reply.verify,
                        reply.url,
                        reply._id,
                        reply.news,
                        reply.user.id,
                        reply.user.username,
                        dateFormat(reply.creationDate)
                    ));
                }
                this.replies = transformedReplies
                return transformedReplies;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getRepliesByName(username : String) {
        return this.http.get(URL + '/api/news/reply/user/' + username)
            .map((response: Response) => {
                const replies = response.json().obj;
                let transformedReplies: Reply[] = [];
                for (let reply of replies) {
                    transformedReplies.push(new Reply(
                        reply.title,
                        reply.synopsis,
                        reply.tags,
                        reply.verify,
                        reply.url,
                        reply._id,
                        reply.news,
                        reply.user.id,
                        reply.user.username,
                        dateFormat(reply.creationDate)
                    ));
                }
                this.replies = transformedReplies
                return transformedReplies;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getRepliesById(replyId : String) {
        return this.http.get(URL + '/api/news/reply/' + replyId)
            .map((response: Response) => {
                const reply = response.json().obj;
                let transformedReplies: Reply;
                    transformedReplies = new Reply(
                        reply.title,
                        reply.synopsis,
                        reply.tags,
                        reply.verify,
                        reply.url,
                        reply._id,
                        reply.user.id,
                        reply.user.username,
                        dateFormat(reply.creationDate)
                    );
                return transformedReplies;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getRepliesByNewsId(newsId : String) {
        return this.http.get('http://localhost:3000/api/news/reply/news/' + newsId)
            .map((response: Response) => {
                const replies = response.json().obj;
                let transformedReplies: Reply[] = [];
                for (let reply of replies) {
                    transformedReplies.push(new Reply(
                        reply.title,
                        reply.synopsis,
                        reply.tags,
                        reply.verify,
                        reply.url,
                        reply._id,
                        reply.news,
                        reply.user.id,
                        reply.user.username,
                        dateFormat(reply.creationDate)
                    ));
                }
                this.replies = transformedReplies
                return transformedReplies;
            })
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }


    editNews(news: News) {
        this.newsIsEdit.emit(news);
    }

    deleteNews(news: News) {
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        this.stories.splice(this.stories.indexOf(news), 1);
        return this.http.delete(URL + '/api/news/' + news.newsId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteReply(reply : Reply) {
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        this.replies.splice(this.replies.indexOf(reply), 1);
        return this.http.delete('http://localhost:3000/api/news/reply/' + reply.replyId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

}