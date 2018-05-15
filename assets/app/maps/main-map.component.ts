import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news/news.service";
import { News } from "../news/news.model";
import { MarkerManager } from "@agm/core";

@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    styleUrls: [
        './main-map.component.css'
    ]
})
export class MainMapComponent implements OnInit {
    
    news: News[]
    markers: Markers[] = []

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.newsService.getNews().subscribe(
            (news: News[]) => {
                this.news = news
                this.news.forEach(n => {
                    this.markers.push({
                        lat: n.latitude,
                        lng: n.longitude,
                        title: n.title,
                        id: n.newsId
                    })
                })
                console.log(this.news)
            }
        )
    }
}

interface Markers {
    lat: number
    lng: number
    title: string
    id: string
}