import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {ProvinceService} from "../../../services/province.service";
import {IDistrict} from "../../../interfaces/IDistrict";

@Component({
  selector: 'app-house-address',
  templateUrl: './house-address.component.html',
  styleUrls: ['./house-address.component.css']
})
export class HouseAddressComponent implements OnInit {

 constructor(private provinceService: ProvinceService) {
 }
  // tslint:disable-next-line:typedef
  ngOnInit() {}



}
