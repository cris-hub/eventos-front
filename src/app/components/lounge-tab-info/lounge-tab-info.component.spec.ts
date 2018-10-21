import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeTabInfoComponent } from './lounge-tab-info.component';

describe('LoungeTabInfoComponent', () => {
  let component: LoungeTabInfoComponent;
  let fixture: ComponentFixture<LoungeTabInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeTabInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeTabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
