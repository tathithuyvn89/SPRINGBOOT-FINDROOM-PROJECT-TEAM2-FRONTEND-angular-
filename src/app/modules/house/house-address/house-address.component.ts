import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProvinceService} from "../../../services/province.service";
import {IDistrict} from "../../../interfaces/IDistrict";
import {IProvince} from "../../../interfaces/IProvince";
import {IAddress} from "../../../interfaces/IAddress";
import {LocalStorageService} from "../../../services/localStorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-house-address',
  templateUrl: './house-address.component.html',
  styleUrls: ['./house-address.component.css']
})
export class HouseAddressComponent implements OnInit {
allProvinces: IProvince[];
allDistricts: IDistrict[];
filteredDistricts : IDistrict[];
 constructor(
   private fb: FormBuilder,
   private provinceService: ProvinceService,
   private localStorageService: LocalStorageService,
   private route: Router) {}

  ngOnInit() {
   this.provinceService.showAllProvinces().subscribe( result =>{
     this.allProvinces = result;
   })
    this.provinceService.getAllDistricts().subscribe(data =>{
     this.allDistricts= data;

    })
  }
addressForm = this.fb.group({
  province: ['', Validators.required],
  district: ['', Validators.required],
  address: ['', Validators.required]
})
  get province() {
   return this.addressForm.get('province');
  }
  get district() {
   return this.addressForm.get('district');
  }
  get address() {
   return this.addressForm.get('address');
  }

  onProvinceChange() {
   let allDistrictsByProvince : IDistrict[];
    console.log("Province change: ");
    console.log("Gia tri cua province ID la: "+ this.province.value);
    console.log(this.allDistricts)
    this.filteredDistricts =    this.allDistricts.filter( district => district.province.id==this.province.value);
    console.log(this.filteredDistricts)

  }

  onDistrictsChange(e) {
  console.log('District changed');
  console.log('Gia tri cua huyen la' + e.value)
  }

  onFormSubmit() {
   const address = {
     name : this.addressForm.get('address').value,
     district: {id: this.addressForm.get('district').value}
   }
   console.log(address);
    this.provinceService.saveAddress(address).subscribe(data =>{
      console.log(data)
      this.localStorageService.saveAddressId(data.id);
    });

    this.resetForm();
    this.route.navigate(['house/house-create']);
  }
  resetForm() {
  this.filteredDistricts= [];
  this.addressForm.reset();
  }
}
