import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDetailsComponent } from './experiences-details.component';

describe('ExperiencesDetailsComponent', () => {
  let component: ExperiencesDetailsComponent;
  let fixture: ComponentFixture<ExperiencesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
