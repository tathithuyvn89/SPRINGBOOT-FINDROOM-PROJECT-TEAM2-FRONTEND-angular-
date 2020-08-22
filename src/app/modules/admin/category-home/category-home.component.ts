import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryHomeService} from "../../../services/categoryHome.service";

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  createCategory: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryHomeService
  ) { }

  ngOnInit(): void {
    this.createCategory = this.fb.group(
      {'nameCategoryHome': ['', Validators.required]}
    )
  }
  onSubmit() {
    this.submitted = true;
    const dataJs = this.createCategory.value;
    this.categoryService.createCategoryHome(dataJs).subscribe(result => {
      console.log(result);
      alert("Created new Category with name = " + result.nameCategoryHome+ " OK");
    })
    this.createCategory.reset();

  }
  get f() { return this.createCategory.controls; }
  }
