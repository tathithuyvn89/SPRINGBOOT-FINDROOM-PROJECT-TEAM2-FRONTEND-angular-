import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHomeComponent } from './category-home/category-home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'category-create', component: CategoryHomeComponent}
]

@NgModule({
  declarations: [CategoryHomeComponent],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(routes),FormsModule, HttpClientModule
  ]
})
export class AdminModule { }
