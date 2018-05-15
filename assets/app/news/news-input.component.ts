import { Component } from "@angular/core";
import { News } from './news.model';
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './news-input.component.html',
    styleUrls: [
        './news-input.component.css'
    ]

})

export class FormComponent {
    news: News;

    // let form = new Form ( 'www.facebook.com.'
    // ,'So this is the example', 'Canada', 'Canadian, Social',
    // 'Canadian','News, Social, Facebook'
    // );

    latitudeForMap: number = 50
    longitudeForMap: number = -122
    latitude: number
    longitude: number
    zoom: number = 2

    submitted = false;

    onSubmit(f) {
        this.submitted = true;
        console.log(f)
    }

    onClear(form: NgForm) {
        this.news = null;
        form.resetForm();
    }

    autoCompleteCallback1(selectedData: any) {
        console.log(selectedData.response)
        if (selectedData.response) {
            this.latitudeForMap = selectedData.data.geometry.location.lat
            this.latitude = selectedData.data.geometry.location.lat
            this.longitudeForMap = selectedData.data.geometry.location.lng
            this.longitude = selectedData.data.geometry.location.lng
            this.zoom = 10
            console.log(this.latitude + ", " + this.longitude)
        }
    }

    mapClicked($event: any) {
        this.latitude = $event.coords.lat
        this.longitude = $event.coords.lng
        console.log(this.latitude + ", " + this.longitude)
    }

    pinDragged($event: any) {
        this.latitude = $event.coords.lat
        this.longitude = $event.coords.lng
        console.log(this.latitude + ", " + this.longitude)
    }
}

interface Marker {
    name?: string,
    lat: Number,
    lng: Number,
}