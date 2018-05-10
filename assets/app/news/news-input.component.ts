import { Component } from "@angular/core";

import {Form} from './news.model';
@Component({
    selector: 'app-form',
    templateUrl: './news-input.component.html',
    styleUrls:[
        './news-input.component.css'
    ]

})

export class FormComponent{
    // let form = new Form ( 'www.facebook.com.'
    // ,'So this is the example', 'Canada', 'Canadian, Social',
    // 'Canadian','News, Social, Facebook'
    // );
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    
    autoCompleteCallback1(selectedData:any) {
        console.log(selectedData)
    }

}