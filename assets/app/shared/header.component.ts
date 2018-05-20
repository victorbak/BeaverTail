import { Component, OnInit} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StorageService } from "./storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:[
        './header.component.css'
    ]
})
export class HeaderComponent implements OnInit{
    
    username: String
    constructor(
        private authService: AuthService, 
        private router: Router,
        private storageService: StorageService) {
    }

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
        this.storageService.watchStorage().subscribe((data:string) => {
            this.username = localStorage.getItem('username')
        })
    }

}