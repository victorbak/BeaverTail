import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { News } from "./news.model"
import "rxjs/Rx";
import { Observable } from "rxjs"

@Injectable()
export class NewsService {
    private stories: News[] = [];

    constructor(private http: Http) {}

    addNews(news: News) {
        const body = JSON.stringify(news);
        const headers = new Headers({'Content-Type': 'application/json'})
        const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('http://localhost:3000/news' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const news = new News(result.obj.title,
                                      result.obj.synopsis,
                                      [result.obj.tags],
                                      0,
                                      result.obj.url,
                                      null,
                                      result.obj.dates,
                                      result.obj.user._id
                                      );
                this.stories.push(news);
                return news;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getNews() {
        return this.http.get('http://localhost:3000/news')
            .map((response: Response) => {
                const stories = response.json().obj;
                let transformedNews: News[] = [];
                for (let news of stories) {
                    transformedNews.push(new News(news.title, news.synopsis, ['Canada'], 10, 'ppl', 'tag'));
                }
                this.stories = transformedNews;
                return transformedNews;
            })
            .catch((error: Response) => Observable.throw(error.json()));            
    }
}