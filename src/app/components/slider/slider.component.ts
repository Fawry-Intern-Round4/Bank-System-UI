import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  constructor(private router: Router) {}

  onClickJoinUs() {
    this.router.navigate(['login']);
  }
}
