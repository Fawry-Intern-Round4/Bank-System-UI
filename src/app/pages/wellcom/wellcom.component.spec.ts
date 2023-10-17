import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomComponent } from './wellcom.component';

describe('WellcomComponent', () => {
  let component: WellcomComponent;
  let fixture: ComponentFixture<WellcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WellcomComponent]
    });
    fixture = TestBed.createComponent(WellcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
