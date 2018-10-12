import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquarteDetailsComponent } from './headquarte-details.component';

describe('HeadquarteDetailsComponent', () => {
  let component: HeadquarteDetailsComponent;
  let fixture: ComponentFixture<HeadquarteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadquarteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquarteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
