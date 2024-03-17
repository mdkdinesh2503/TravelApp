import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pageError',
  templateUrl: './pageError.component.html',
  styleUrls: ['./pageError.component.css'],
})
export class PageErrorComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
