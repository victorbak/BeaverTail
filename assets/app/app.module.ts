import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { HeaderComponent } from './shared/header.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete'
import { SignupComponent } from '../app/auth/signup.component';
import { routing } from './app.routing';
import { SigninComponent } from '../app/auth/signin.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AgmCoreModule } from '@agm/core'
import { MainMapComponent } from './maps/main-map.component';
import { ProfileComponent } from './user/profile.component';
import { UserInfoComponent } from './user/user-info.component';
import { FormComponent } from './news/news-input.component';
import { AgmCoreOverrideModule } from './agmcoreoverride.module';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmJsMarkerClustererModule, ClusterManager } from '@agm/js-marker-clusterer';
import { NewsListComponent } from './news/news-list.component';
import { NewsComponent } from './news/news.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RlTagInputModule } from 'angular2-tag-input';
import {TabModule} from 'angular-tabs-component';
import { NewsService } from './news/news.service';
import { NewsDetailComponent } from './news/news-detail.component';
import { NewsReplyComponent } from './news/news-reply.component';
import { StorageService } from './shared/storage.service';
import { NewsPopularComponent } from './news/news-popular.component';
import { NewsRecentComponent } from './news/news-recent.component';
import { NewsReplyInputComponent } from './news/news-reply-input.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        MainMapComponent,
        ProfileComponent,
        FormComponent,
        UserInfoComponent,
        NewsListComponent,
        NewsComponent,
        NewsDetailComponent,
        NewsReplyComponent,
        NewsReplyInputComponent,
        NewsPopularComponent,
        NewsRecentComponent
        ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreOverrideModule.forRoot({
            apiKey: 'AIzaSyBeWcFP4LtWiS8ckrXz1JytArU2YEXhMPc'
        }),
        AgmSnazzyInfoWindowModule,
        AgmJsMarkerClustererModule,
        Ng4GeoautocompleteModule.forRoot(),
        RlTagInputModule,
        TabModule,

    ],
    providers: [
        AuthService,
        NewsService,
        ClusterManager,
        StorageService
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

}