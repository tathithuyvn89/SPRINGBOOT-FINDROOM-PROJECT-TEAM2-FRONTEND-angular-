import { Component, OnInit } from '@angular/core';
import {IFeature} from '../../../interfaces/IFeature';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IImage} from '../../../interfaces/IImage';
import {AngularFireDatabase} from '@angular/fire/database';
import {CategoryHomeService} from '../../../services/categoryHome.service';
import {FeatureHomeService} from '../../../services/featureHome.service';
import {HouseService} from '../../../services/house.service';
import {IHouse} from '../../../interfaces/IHouse';
import * as firebase from 'firebase';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

  myFiles: File[] = [];
  categoryHomes: any[];
  features: IFeature[];
  accountId: number;
  formGroup = new FormGroup({
    nameHouse: new FormControl(),
    address: new FormControl(),
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

  constructor(
    private db: AngularFireDatabase,
    private categoryService: CategoryHomeService,
    private featureService: FeatureHomeService,
    private houseService: HouseService
  ) {
  }

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


  save() {
    console.log(this.formGroup.value);
    const house: IHouse = {
      nameHouse: this.formGroup.get('nameHouse').value,
      address: this.formGroup.get('address').value,
      bedroomNum: this.formGroup.get('bedroomNum').value,
      bathroomNum: this.formGroup.get('bathroomNum').value,
      description: this.formGroup.get('description').value,
      priceOneDay: this.formGroup.get('priceOneDay').value,
      status: this.formGroup.get('status').value,
      categoryHome: this.formGroup.get('categoryHome').value
    };
    const featuresArray = this.formGroup.get('features').value;
    this.features.length = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < featuresArray.length; i++) {
      const feature = {id: featuresArray[i]};
      this.features.push(feature);
    }
    house.features = this.features;
    //  Hien tai tren form dang tra ve kieu features: [id: ["1","2"]]
    house.images = this.arrayImage;
    console.log(house);
    if (this.isDone === true) {
      this.houseService.createNewHouse(house).subscribe(result => {
        this.isShow = true;
        this.isSuccess = true;
        this.message = 'Add album success';
        this.formGroup.reset();
      }, error => {
        this.isShow = true;
        this.isSuccess = false;
        this.message = 'Add house fail';
        this.formGroup.reset();
      });
      this.arrayImage = [];
    }

  }
  uploadFile(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.myFiles.push(files[i]);
    }
    this.uploadAll();
  }

  private uploadAll() {
    this.isLoading = true;
    Promise.all(
      this.myFiles.map(file => this.putStorageItem(file))
    )
      .then((url) => {
        console.log('All success', url);
        this.arrayImage = url;
        this.isDone = true;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log('Some failed: ', error.message);
        this.isLoading = false;
        this.isDone = false;
      });
  }

  private putStorageItem(file): Promise<IImage>{
    const metadata = {
      contentType: 'image/jpeg'
    };
    console.log(file);

    return new Promise<IImage>((resolve, reject) => {
      firebase.storage().ref('img/' + Date.now()).put(file, metadata)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(dowloadURL => {
            const images = {srcImg: dowloadURL};
            resolve(images);
          });
        })
        .catch(error => reject(error));
    });
  }
  onClick() {

  }


}
