import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { requiredValidator } from '@app-fe/helpers/validators';
import { DropdownComponent } from '@app-fe/elements/dropdown/dropdown.component';
import { genders as gendersRaw } from '@app-fe/constants/fields';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  @ViewChild('genderDropdown') genderDropdown: DropdownComponent<string>;

  public signUpForm: FormGroup;
  public isSubmitted = false;
  public genders = gendersRaw;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', requiredValidator()),
      lastName: new FormControl('', requiredValidator()),
      birthDate: new FormControl(''),
      gender: new FormControl(''),
    });
    // TODO: resolve it
    this.signUpForm.valueChanges.subscribe(() => console.log('test'));

    this.setGenders();
  }

  setGenders() {
    gendersRaw.forEach((gender, i) => {
      this.translate.get(gender.label).subscribe(res => {
        this.genders[i].label = res;
      });
    });
  }

  onValueChange() {
    if (this.isSubmitted) {
      this.isSubmitted = false;
    }
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.isSubmitted = true;
  }
}
