import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) { }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
