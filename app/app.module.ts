/**
 * Created by patri_000 on 10.08.2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
