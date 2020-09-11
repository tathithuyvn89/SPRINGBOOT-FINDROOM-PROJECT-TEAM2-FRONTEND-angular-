import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IImage} from '../../../interfaces/IImage';
import {CategoryHomeService} from '../../../services/categoryHome.service';
import {FeatureHomeService} from '../../../services/featureHome.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {HouseService} from '../../../services/house.service';
import {IHouse} from '../../../interfaces/IHouse';
import * as firebase from 'firebase';
import {IFeature} from '../../../interfaces/IFeature';
import Swal from 'sweetalert2'
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {UploadService} from "../../../services/upload.service";
import {LocalStorageService} from "../../../services/localStorage.service";

const TOAST = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  settings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText : 'Unselect all',
    limitSelection : -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 10,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No value',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen : false
  }
  myFiles: File[] = [];
  categoryHomes: any[];
  features: IFeature[];
  accountId: number;
  formGroup = new FormGroup({
    nameHouse: new FormControl(),
    bedroomNum: new FormControl(),
    bathroomNum: new FormControl(),
    description: new FormControl(),
    priceOneDay: new FormControl(),
    status: new FormControl(),
    categoryHome: new FormGroup({
      id: new FormControl(),
    }),
    features: new FormArray([])
  });
  arrayImage: IImage[] = [];
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  isDone = false;
  house: IHouse;
  constructor(
    private db: AngularFireDatabase,
    private categoryService: CategoryHomeService,
    private featureService: FeatureHomeService,
    private houseService: HouseService,
    private fileUploadService: UploadService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Lay listCategory tu service ra
    this.categoryService.listCategories().subscribe(response => {
      this.categoryHomes = response;
      console.log(response);
    });
    // Lay ListFeatures tu service ra
    this.featureService.listFeatures().subscribe(respon => {
      this.features = respon;
      console.log(respon);
    });
  }



 async onSubmit() {
    if(this.formGroup.invalid) {
      await TOAST.fire({
        icon: 'warning',
        title: 'invalid',
        html: 'Please Complete'
      });
      return;
    }
    console.log('saving');

   // @ts-ignore
   this.house = {
     nameHouse: this.formGroup.get('nameHouse').value,
     bedroomNum: this.formGroup.get('bedroomNum').value,
     bathroomNum: this.formGroup.get('bathroomNum').value,
     description: this.formGroup.get('description').value,
     priceOneDay: this.formGroup.get('priceOneDay').value,
     status: this.formGroup.get('status').value,
     categoryHome: this.formGroup.get('categoryHome').value,
     houseAddress : {id: +this.localStorageService.getAddressId()}
   };
   const featuresArray = this.formGroup.get('features').value;
   this.features.length = 0;
   // tslint:disable-next-line:prefer-for-of
   for (let i = 0; i < featuresArray.length; i++) {
     const feature = {id: featuresArray[i]};
     this.features.push(feature);
   }
   this.house.features = this.features;
   //  Hien tai tren form dang tra ve kieu features: [id: ["1","2"]]

   const  uploadArray = [];
   this.myFiles.forEach((file)=>{
     uploadArray.push(this.fileUploadService.startUpload(file));
   })
   console.log('Before upload');
   Promise.all(uploadArray)
     .then(async (result) =>{
       console.log(result);
       for (let i =0; i<result.length; i++) {
         const element = result[i];
         const imageUrl = await element.ref.getDownloadURL();
         //this.fileUploadService.convertToResizeUrl(imageUrl)
         this.arrayImage.push({srcImg: imageUrl});

       }
       console.log('tronh bonh ;+lap'+this.arrayImage);
       this.house.images = this.arrayImage;
       console.log(this.house.images);
       this.houseService.createNewHouse(this.house).subscribe(result => {
         this.isShow = true;
         this.isSuccess = true;
         this.message = 'Add album success';
         this.myFiles=[];
         this.formGroup.reset();
       }, error => {
         this.isShow = true;
         this.isSuccess = false;
         this.message = 'Add house fail';
         this.arrayImage = [];
         this.formGroup.reset();
       });
       this.isDone = true;
     })
   console.log(this.isDone)
   console.log(this.house);

   // this.createArrayImage();
 }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.formGroup.get('features') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
 createArrayImage() {

 }

  onSelect(event: {addedFiles: any}) {
    console.log(event);
    this.myFiles.push(...event.addedFiles)
   console.log(this.myFiles);
  }
  onRemove(event: File) {
    console.log(event);
    this.myFiles.splice(this.myFiles.indexOf(event),1);
    console.log(this.myFiles);
  }

}
