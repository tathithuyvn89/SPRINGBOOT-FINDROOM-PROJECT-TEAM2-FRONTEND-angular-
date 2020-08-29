import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryHomeService} from '../../../../services/categoryHome.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  createCategory: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryHomeService
  ) { }

  ngOnInit(): void {
    this.createCategory = this.fb.group(
      {nameCategoryHome: ['', Validators.required]}
    );
  }
  onSubmit() {
    this.submitted = true;
    const dataJs = this.createCategory.value;
    this.categoryService.createCategoryHome(dataJs).subscribe(result => {
      // Cần phải tạo ra thông báo khi người dùng nhập vào thông tin back end trả về không hợp lệ.
      // Trường hợp này khi back end trả về HtttpStatus. No_conten thì aleart không có thông báo gì
      console.log(result);
      alert('Created new Category with name = ' + result.nameCategoryHome + ' OK');
      // tslint:disable-next-line:no-shadowed-variable
    }, error => alert(dataJs.nameCategoryHome + ' is exist. Please enter other name'));
    this.createCategory.reset();

  }
  get f() { return this.createCategory.controls; }

}
