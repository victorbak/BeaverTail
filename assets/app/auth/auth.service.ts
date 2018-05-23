import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { User } from './user.model'
import 'rxjs'
import { Observable } from "rxjs"
import { StorageService } from "../shared/storage.service";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {

    constructor(private http: Http, private storageService: StorageService, private errorService : ErrorService) {
    }

    signup(user: User) {
        const body = JSON.stringify(user)
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('http://localhost:3000/api/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user)
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('http://localhost:3000/api/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        this.storageService.clearStorage()
    }

    isLoggedIn() {
        return localStorage.getItem('token') != null
    }

    getUser(username){
        
        return this.http.get('http://localhost:3000/api/user/'+ username)
        .map((response: Response) =>{
            const user = response.json().obj
            return user;
        })
        .catch((error: Response) => { 
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
}