import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDataCompanyComponent } from './reservation-data-company.component';

describe('ReservationComponent', () => {
  let component: ReservationDataCompanyComponent;
  let fixture: ComponentFixture<ReservationDataCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDataCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDataCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
