import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService, private router: Router) { }
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
