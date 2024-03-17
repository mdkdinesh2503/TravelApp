import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [RouterLink],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
