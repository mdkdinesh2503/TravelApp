import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
})
export class PackagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
