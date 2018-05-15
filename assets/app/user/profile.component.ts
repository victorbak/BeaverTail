import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit{
    private username = localStorage.getItem('username')
    user: User
    constructor(private authService: AuthService, private router: Router){}
    ngOnInit(){
        this.authService.getUser(this.username)
        .subscribe((user: User) => {
            this.user = user
        })
    }
}