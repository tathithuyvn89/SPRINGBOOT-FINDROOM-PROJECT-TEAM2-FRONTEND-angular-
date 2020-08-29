import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryHomeService} from '../../../../services/categoryHome.service';
import {FeatureHomeService} from '../../../../services/featureHome.service';

@Component({
  selector: 'app-freature-create',
  templateUrl: './feature-create.component.html',
  styleUrls: ['./feature-create.component.css']
})
export class FeatureCreateComponent implements OnInit {

  createFeature: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private featureService: FeatureHomeService
  ) { }

  ngOnInit(): void {
    this.createFeature = this.fb.group(
      {name: ['', Validators.required]}
    );
  }
  onSubmit() {
    this.submitted = true;
    const dataJs = this.createFeature.value;
    this.featureService.createNewFeature(dataJs).subscribe(result => {
      // Cần phải tạo ra thông báo khi người dùng nhập vào thông tin back end trả về không hợp lệ.
      // Trường hợp này khi back end trả về HtttpStatus. No_conten thì aleart không có thông báo gì

      console.log(result);
      alert('Created new Feature with name = ' + result.name + ' OK');
    }, error => {alert( dataJs.name + ' is exist. Please other feature'); });
    this.createFeature.reset();

  }
  get f() { return this.createFeature.controls; }


}
