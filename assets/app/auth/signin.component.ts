import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    public myForm: FormGroup
    
    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(this.myForm.value.username, this.myForm.value.password)
        
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('userId', data.userId)
                    localStorage.setItem('username', data.obj.username)
                    localStorage.setItem('token', data.token)
                    this.router.navigateByUrl('/')
                },
                error => console.log(error)
            )
        this.myForm.reset()
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        })
    }
}