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
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService
  ) {}

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

  condition: boolean = true;
  displayStatus: boolean = false;
  message:any;
  imagePath:any;
  color:any;

  async submitList(usr: any, eml: any) {
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
      await fetch('http://localhost:3000/registers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            if (usr == data[i].USERNAME) {
              alert('Username is Already Exist');
              this.condition = false;
            } else if (eml == data[i].EMAIL) {
              alert('Email is Already Exist');
              this.condition = false;
            } else {
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });

      if (this.condition) {
        this.userService.addData('http://localhost:3000/registers', this.registerReactiveForm.value);
        this.message = "Registered Successfull";
        this.imagePath = "../../assets/images/tick.png";
        this.color = "green";
        this.displayStatus = true;
      } else {
        this.message = "Inavlid Credentials";
        this.imagePath = "../../assets/images/wrong.png";
        this.color = "red";
        this.displayStatus = true;
      }
    }
  }

  navigateActiveStatus() {
    this.displayStatus = false;

    if (this.imagePath == "../../assets/images/tick.png") {
      this.route.navigate(['/login']);
    } else {
      window.location.reload();
    }
  }

}
