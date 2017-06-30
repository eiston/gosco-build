import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['signin']);
      } else {
          console.log('logged in ', auth);
          this.router.navigate(['']);
        }
      }
      );
  }



  logout() {
    this.authService.logout();
  }
}
