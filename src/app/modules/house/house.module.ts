import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HouseCreateComponent} from "./house-create/house-create.component";
import { CheckBoxComponent } from './check-box/check-box.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";


const routes: Routes =[
  {path: 'house-create', component: HouseCreateComponent}
]

@NgModule({
    declarations: [CheckBoxComponent, HouseCreateComponent],
    exports: [
        CheckBoxComponent,
        HouseCreateComponent
    ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes),HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class HouseModule { }
