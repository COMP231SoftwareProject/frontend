import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationSlotBookingComponent } from './vaccination-slot-booking.component';

describe('VaccinationSlotBookingComponent', () => {
  let component: VaccinationSlotBookingComponent;
  let fixture: ComponentFixture<VaccinationSlotBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationSlotBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
