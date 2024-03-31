import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frontPage',
  templateUrl: './frontPage.component.html',
  styleUrls: ['./frontPage.component.css'],
  standalone: true,
  imports: [RouterLink],
})
export class FrontPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
