import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup
    
    constructor(private authService: AuthService) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.username, 
            this.myForm.value.password, 
            this.myForm.value.email,
            this.myForm.value.name,
            this.myForm.value.bio,
            this.myForm.value.socialMedia,
            this.myForm.value.picture,
            "User"
        )
        console.log("Sending: \n" + user)
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )
        console.log(this.myForm)
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            bio: new FormControl(null),
            name: new FormControl(null),
            email: new FormControl(null, Validators.pattern("(^$|^.*@.*\..*$)")),
            socialMedia: new FormControl(null),
            picture: new FormControl(null),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        })
    }
}