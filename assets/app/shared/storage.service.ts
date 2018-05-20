import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageService {

    private storageSub = new Subject<string>();

    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
    }

    setItem(key: string, data: any) {
        localStorage.setItem(key, data);
        this.storageSub.next('changed');
    }

    removeItem(key) {
        localStorage.removeItem(key);
        this.storageSub.next('changed');
    }

    clearStorage() {
        localStorage.clear();
        this.storageSub.next('changed');
    }
}