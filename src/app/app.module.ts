import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {AdminModule} from "./modules/admin/admin.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule, RouterModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
