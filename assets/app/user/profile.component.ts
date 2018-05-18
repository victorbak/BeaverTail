import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { StorageService } from "../shared/storage.service";
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit{
    private username
    user: User
    constructor(private authService: AuthService, private router: Router, private storageService: StorageService){}
    ngOnInit(){
        var splitUrl = this.router.url.split("/")
        this.username = splitUrl[splitUrl.length - 1]
        this.authService.getUser(this.username)
        .subscribe((user: User) => {
            this.user = user
        })
    }
}