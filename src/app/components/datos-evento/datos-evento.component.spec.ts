import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEventoComponent } from './datos-evento.component';

describe('DatosEventoComponent', () => {
  let component: DatosEventoComponent;
  let fixture: ComponentFixture<DatosEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
