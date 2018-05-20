import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { News } from "./news.model"
import { Reply } from "./reply.model"
import "rxjs/Rx";
import { Observable } from "rxjs"
import { error } from "util";
import { User } from "../auth/user.model";

@Injectable()
export class NewsService {
    private stories: News[] = [];
    private replies: Reply[] = [];
    newsIsEdit = new EventEmitter<News>();

    constructor(private http: Http) { }

    addNews(news: News) {
        const body = JSON.stringify(news);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/api/news' + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const news = new News(result.obj.title,
                    result.obj.synopsis,
                    result.obj.tags,
                    result.obj.replyCount,
                    result.obj.url,
                    result.obj.longitude,
                    result.obj.latitude,
                    result.obj.dates,
                    result.obj.creationDate,
                    result.obj._id,
                    result.obj.user.id,
                    result.obj.user.username
                );
                this.stories.push(news);
                return news;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    addReply(reply: Reply, newsId: string) {
        const body = JSON.stringify(reply);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/api/news/' + newsId + '/' + 'reply' + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const reply = new Reply(
                    result.obj.title,
                    result.obj.synopsis,
                    result.obj.tags,
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
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNews() {
        return this.http.get('http://localhost:3000/api/news')
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
                        news.dates,
                        news.creationDate,
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPopularNews(){
        return this.http.get('http://localhost:3000/api/news/popular')
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
                        news.dates,
                        news.creationDate,
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getRecentNews(){
        return this.http.get('http://localhost:3000/api/news/new')
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
                        news.dates,
                        news.creationDate,
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNewsByName(username: String) {
        return this.http.get('http://localhost:3000/api/news/user/' + username)
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
                        news.dates,
                        news.creationDate,
                        news._id,
                        news.user.id,
                        news.user.username
                    ));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNewsById(newsId: String) {
        return this.http.get('http://localhost:3000/api/news/' + newsId)
            .map((response: Response) => {
                const news = response.json().obj;
                let transformedNews: News;
                transformedNews = new News(news.title,
                    news.synopsis,
                    news.tags,
                    news.replyCount,
                    news.url,
                    news.longitude,
                    news.latitude,
                    news.dates,
                    news.creationDate,
                    news._id,
                    news.userId,
                    news.username);
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editNews(news: News) {
        this.newsIsEdit.emit(news);
    }

    deleteNews(news: News) {
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        this.stories.splice(this.stories.indexOf(news), 1);
        return this.http.delete('http://localhost:3000/api/news/' + news.newsId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}