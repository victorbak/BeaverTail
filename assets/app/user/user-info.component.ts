import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
@Component({
    selector: 'user-info',
    templateUrl: 'user-info.component.html',
    // styles: [`.user-photo{height: 150px;}
    //           tr td:first-child {width:100px}
    //         hr{visibility:hidden}`]
    styleUrls: [
        './user-info.component.css',
    ]

})
export class UserInfoComponent implements OnInit {
    private username
    user: User
    constructor(private authService: AuthService, private router: Router) { }
    ngOnInit() {
        var splitUrl = this.router.url.split("/")
        this.username = splitUrl[splitUrl.length - 1]
        this.authService.getUser(this.username)
            .subscribe((user: User) => {
                this.user = user
            })
    }
}