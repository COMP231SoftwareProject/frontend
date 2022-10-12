import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBedBookingComponent } from './hospital-bed-booking.component';

describe('HospitalBedBookingComponent', () => {
  let component: HospitalBedBookingComponent;
  let fixture: ComponentFixture<HospitalBedBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBedBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
