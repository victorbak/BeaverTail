import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { StorageService } from "../shared/storage.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    public myForm: FormGroup
    
    constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {}

    onSubmit() {
        const user = new User(this.myForm.value.username, this.myForm.value.password)
        
        this.authService.signin(user)
            .subscribe(
                data => {
                    this.storageService.setItem('userId', data.userId)
                    this.storageService.setItem('username', data.obj.username)
                    this.storageService.setItem('token', data.token)
                },
                error => console.log(error)
            )

        this.router.navigateByUrl('/')
        this.myForm.reset()
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        })
    }
}