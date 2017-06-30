import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  loginInfo = null;
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe((auth) => {
      this.loginInfo = auth
    });
  }
  isloggedin(): boolean  {
    console.log('Nice, it worked!fssdsd', this.user);
    return this.loginInfo !== null;
  }
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!' , value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  loginWithGoogle(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut()
      .then(value => {
        console.log('Nice, it logged out' , value)
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

}
