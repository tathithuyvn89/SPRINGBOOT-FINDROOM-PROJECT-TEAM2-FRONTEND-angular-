import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {
  // personForm: FormGroup;
  // selectedHobbiesNames: [string];
  // myhobbies: any= [
  //   {
  //     id: 1,
  //     name: 'Sport',
  //   },
  //   {
  //     id: 2,
  //     name: 'Music',
  //     selected: true
  //   },
  //   {
  //     id: 3,
  //     name: 'Book',
  //     selected: true,
  //   },
  //   {
  //     id: 4,
  //     name : 'Movie'
  //   },
  //   {
  //     id: 5,
  //     name: 'Language'
  //   }
  // ]
  // constructor() { }
  //
  // ngOnInit() {
  //   this.createFormInputs();
  // }
  // createFormInputs() {
  //   this.personForm = new FormGroup({
  //     hobies: this.createHobies(this.myhobbies)
  //   });
  //   this.getSelectedHobies();
  // }
  // createHobies(hobbiesInputs) {
  //   const arr= hobbiesInputs.map(hobby =>{
  //     return new FormControl(hobby.selected||false);
  //   });
  //   return new FormArray(arr);
  // }
  // getSelectedHobies(){
  //   this.selectedHobbiesNames = _.map(
  //     this.personForm.controls.hobbies["controls"],
  //     (hobby,i) => {
  //       return hobby.id && this.myhobbies[i].value;
  //     }
  //   );
  //   this.getSelectedHobiesName();
  // }
  // getSelectedHobbiesName() {
  //   this.selectedHobbiesNames = _.filter(
  //     this.selectedHobbiesNames,
  //     function (hobby) {
  //       if (hobby!==false) {
  //         return hobby;
  //       }
  //     }
  //   )
  // }
  // onSubmit()
}
