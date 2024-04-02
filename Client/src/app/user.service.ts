import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private route: Router) {}

  async addData(url: any, data:any) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {

      })
      .catch((err) => {
        console.log(err);
      });
  }

}
