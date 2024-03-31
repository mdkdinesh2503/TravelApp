import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { confirmPasswordValidator } from '../confirmpassword.validator';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule]
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router, private userService : UserService) {}

  ngOnInit() {}

  registerReactiveForm = this.fb.group(
    {
      USERNAME: [, [Validators.required]],
      EMAIL: [, [Validators.required]],
      PASSWORD: [, [Validators.required]],
      CONFIRMPASSWORD: [, [Validators.required]],
    },
    {
      validator: confirmPasswordValidator('PASSWORD', 'CONFIRMPASSWORD'),
    }
  );

  submitList(username: any, email: any, pass: any) {
    if (this.registerReactiveForm.controls['USERNAME'].errors?.['required']) {
      alert('Username is not Empty!!');
    } else if (
      this.registerReactiveForm.controls['EMAIL'].errors?.['required']
    ) {
      alert('Email is not Empty!!');
    } else if (
      this.registerReactiveForm.controls['PASSWORD'].errors?.['required']
    ) {
      alert('Password is not Empty!!');
    } else if (
      this.registerReactiveForm.controls['CONFIRMPASSWORD'].errors?.[
        'confirmPasswordValidator'
      ]
    ) {
      alert('Confirm Password is Invalid!!');
    } else if (!this.registerReactiveForm.valid) {
      alert('Field must not contain any error');
    } else {

      var registerValue = {
        UserName: username,
        Email: email,
        Password: pass
      };

      this.userService.addRegister(registerValue).subscribe();

    alert('Registered Successfull');
    this.route.navigate(['/login']);
    }
  }
}
