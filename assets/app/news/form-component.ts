import { Component } from "@angular/core";

import {Form} from './form.model'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    // styleUrls:[
    //     './form.component.css'
    // ]

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

}