import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeCarouselComponent } from './lounge-carousel.component';

describe('LoungeCarouselComponent', () => {
  let component: LoungeCarouselComponent;
  let fixture: ComponentFixture<LoungeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
