import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news/news.service";
import { News } from "../news/news.model";
import { MarkerManager } from "@agm/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";


@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    styleUrls: [
        './main-map.component.css',
        '../../../node_modules/snazzy-info-window/dist/snazzy-info-window.css'
    ]
})
export class MainMapComponent implements OnInit {
    
    news: News[]
    markers: Markers[] = []

    constructor(private newsService: NewsService, private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.newsService.getNews().subscribe(
            (news: News[]) => {
                this.news = news
                this.news.forEach(n => {
                    this.markers.push({
                        lat: n.latitude,
                        lng: n.longitude,
                        title: n.title,
                        id: n.newsId,
                        desc: n.synopsis.length > 100? n.synopsis.substring(0, 99) + "..." : n.synopsis
                    })
                })
                console.log(this.news)
            }
        )
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    getDetail(id) {
        this.router.navigate(['/news'],{queryParams: {newsId: id}} )
    }
}

interface Markers {
    lat: number
    lng: number
    title: string
    id: string
    desc: string
}