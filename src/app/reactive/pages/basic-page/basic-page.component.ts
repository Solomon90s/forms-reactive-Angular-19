import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  #formBuilder = inject(FormBuilder);
  formUtils = FormUtils;
  myForm: FormGroup = this.#formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ] /** Validadores síncronos */ /** Validadores asíncronos */,
    ],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset({
      price: 100,
      inStorage: 50,
      name: '',
    });
  }
}
