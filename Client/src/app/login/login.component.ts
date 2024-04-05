import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  condition: boolean = false;
  displayStatus: boolean = false;
  message:any;
  imagePath:any;
  color:any;

  async submitList(usr: any, pss: any) {
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
            if (((usr == data[i].USERNAME) || (usr == data[i].EMAIL)) && (pss == data[i].PASSWORD)) {
              this.condition = true;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });

        if(this.condition) {
          this.message = "Login Successfull";
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

  navigateActiveStatus() {
    this.displayStatus = false;

    if (this.imagePath == "../../assets/images/tick.png") {
      this.route.navigate(['/register']);
    }
  }

  fieldTextType: boolean = false;

  showPass() {
    this.fieldTextType = !this.fieldTextType;
  }

  openForgotPass() {

  }

}
