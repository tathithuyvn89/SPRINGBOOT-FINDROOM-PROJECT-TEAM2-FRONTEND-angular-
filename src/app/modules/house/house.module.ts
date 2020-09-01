import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HouseCreateComponent} from './house-create/house-create.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { HouseListComponent } from './house-list/house-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {NgxDropzoneModule} from "ngx-dropzone";


const routes: Routes = [
  {path: 'house-create', component: HouseCreateComponent},
  {path: 'house-test', component: CheckBoxComponent}
];

@NgModule({
    declarations: [CheckBoxComponent, HouseCreateComponent, HouseEditComponent, HouseListComponent],
    exports: [
        CheckBoxComponent,
        HouseCreateComponent
    ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),DropzoneModule, NgxDropzoneModule,
    AngularFirestoreModule, MatFormFieldModule, MatAutocompleteModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class HouseModule { }
