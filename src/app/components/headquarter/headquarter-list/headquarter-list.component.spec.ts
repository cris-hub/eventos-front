import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquarterListComponent } from './headquarter-list.component';

describe('HeadquarterListComponent', () => {
  let component: HeadquarterListComponent;
  let fixture: ComponentFixture<HeadquarterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadquarterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquarterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
