import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getToken } from 'src/app/environments/environments';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  constructor(private router: Router) {}

  onClickJoinUs() {
    this.isLoginUser()
      ? this.router.navigate(['home'])
      : this.router.navigate(['login']);
  }

  isLoginUser() {
    return getToken() != null;
  }
}
