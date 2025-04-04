import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css',
})
export class SwitchesPageComponent {
  #formBuilder = inject(FormBuilder);
  formUtils = FormUtils;
  myForm: FormGroup = this.#formBuilder.group({
    gender: ['M', Validators.required],
    // gender: [Validators.required],
    wantNotifications: [true],
    termAndConditions: [false, Validators.requiredTrue],
  });
  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
