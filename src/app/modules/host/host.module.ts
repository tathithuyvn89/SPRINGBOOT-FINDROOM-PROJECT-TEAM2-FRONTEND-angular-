import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCreateComponent } from './house-create/house-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes =[
  {path: 'house-create', component: HouseCreateComponent}
]

@NgModule({
  declarations: [HouseCreateComponent],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(routes),FormsModule, HttpClientModule
  ]
})
export class HostModule { }
