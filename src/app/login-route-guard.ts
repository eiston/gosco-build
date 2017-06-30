import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return true;
  }
}
