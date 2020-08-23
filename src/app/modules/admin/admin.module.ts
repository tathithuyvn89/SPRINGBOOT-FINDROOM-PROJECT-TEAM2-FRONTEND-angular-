import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FeatureCreateComponent } from './feature-home/feature-create/feature-create.component';
import { CategoryCreateComponent } from './category-home/category-create/category-create.component';

const routes: Routes = [
  {path: 'category-create', component: CategoryCreateComponent},
  {path: 'feature-create', component: FeatureCreateComponent}
]

@NgModule({
  declarations: [ FeatureCreateComponent, CategoryCreateComponent],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(routes),FormsModule, HttpClientModule
  ]
})
export class AdminModule { }
