import { Component } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import {News} from './news.model';

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
    tags: string[] = []
    peopleTags: string[] = []
    govTags: string[] = []
    title: string
    synopsis: string
    url?: string

    errorMessages: string[] = []

    submitted = false;

    onSubmit(form: NgForm) {
        this.errorMessages = []
        this.submitted = true;
        console.log(form)
        console.log(this.latitude + ", " + this.longitude)
        if (!this.latitude || !this.longitude) {
            this.errorMessages.push("Please enter a valid location")
        }
        if (this.tags.length == 0 && this.govTags.length == 0 && this.peopleTags.length == 0) {
            this.errorMessages.push("Please enter at least one tag")
        }
        if (form.form.value.url) {
            var urlRegex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
            if (!urlRegex.test(form.form.value.url)) {
                this.errorMessages.push("Please enter a valid URL")
            }
        }
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