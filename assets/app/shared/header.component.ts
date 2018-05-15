import { Component, OnInit} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:[
        './header.component.css',
    './animate.component.css',
    '/bootstrap.component.css',
    '/flexslider.component.css',
    '/icomoon.component.css',
    '/magnific-popup.component.css',
    '/owl.carousel.min.component.css',
    '/owl.theme.default.min.component.css',
    '/style.component.css',
    '/themify-icons.component.css',
    ]
})
export class HeaderComponent implements OnInit{
    
    username: String
    constructor(private authService: AuthService, private router: Router) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout()
        this.router.navigateByUrl('/')
    }

    ngOnInit() {
        if (this.isLoggedIn()) {         
            this.username = localStorage.getItem('username')
        }
    }

}