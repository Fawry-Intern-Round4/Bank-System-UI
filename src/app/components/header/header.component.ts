import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getToken, logOut } from 'src/app/environments/environments';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logUserOut() {
    logOut();
  }

  isLoginUser() {
    return getToken() != null;
  }
}
