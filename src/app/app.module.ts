import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AdminModule} from './modules/admin/admin.module';
import {HouseModule} from './modules/house/house.module';
import { IndexComponent } from './templates/index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, AdminModule, HouseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
