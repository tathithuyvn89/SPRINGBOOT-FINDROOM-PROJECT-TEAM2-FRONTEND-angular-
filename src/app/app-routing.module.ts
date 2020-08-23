import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";



const routes: Routes =[
  {path: 'admin', loadChildren:() =>import('./modules/admin/admin.module').then(m =>m.AdminModule)},
  {path: 'house', loadChildren:() =>import('./modules/house/house.module').then(m => m.HouseModule)}
]

@NgModule({
  declarations: [],
  providers:[RouterModule],
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ]
})
export class AppRoutingModule { }
