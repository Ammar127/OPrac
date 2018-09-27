import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as fire from 'firebase';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<fire.User>;
  constructor(private  afAuth: AngularFireAuth) {  this.user$ = afAuth.authState; }
  login() {

    this.afAuth.auth.signInWithRedirect(new fire.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
