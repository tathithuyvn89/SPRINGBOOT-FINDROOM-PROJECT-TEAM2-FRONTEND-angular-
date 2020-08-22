import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {host} from "@angular-devkit/build-angular/src/test-utils";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HostModule} from "./modules/host/host.module";


const routes: Routes =[
  {path:'host', loadChildren:()=>import('./modules/host/host.module').then(m => m.HostModule)},
  {path: 'admin', loadChildren:() =>import('./modules/admin/admin.module').then(m =>m.AdminModule)}
]

@NgModule({
  declarations: [],
  providers:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
