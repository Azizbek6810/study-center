import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css'],
})
export class AddEditTeacherComponent {
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    dateOfRegister: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    telegramUserName: ['', Validators.required],
    specialization: ['', Validators.required],
  });
  /**
   *
   */
  constructor(private fb: FormBuilder, private $teachers: TeachersService) {}

  add() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const request = this.form.getRawValue();
    console.log(request);

    // this.$teachers.add(request).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
