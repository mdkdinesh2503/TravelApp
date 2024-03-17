// import { NgClass, NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterOutlet, NgClass, RouterLinkWithHref, RouterLinkActive],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  isMenuOpen: boolean = false;
  hide: boolean = true;

  openMenu() {
    this.isMenuOpen = true;
    this.hide = false;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.hide = true;
  }

  scroll = (): void => {
    let scrollHeigth = (window.scrollY > 0)? 150 : 0;

    if(scrollHeigth != 0){
      document.body.style.setProperty('--navbar-scroll', "var(--green)");
      document.body.style.setProperty('--navbar-scroll-border', "var(--white-border)");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px var(--white)");
    }
    else {
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-border', "none");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
    }
  };


}
