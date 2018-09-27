import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';

import * as fire from 'firebase';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   {


  constructor(public afAuth: AuthService) {

  }
  logout() {
  this.afAuth.logout();
  }

}
