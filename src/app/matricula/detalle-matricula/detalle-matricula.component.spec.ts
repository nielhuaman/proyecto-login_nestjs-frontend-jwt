import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMatriculaComponent } from './detalle-matricula.component';

describe('DetalleMatriculaComponent', () => {
  let component: DetalleMatriculaComponent;
  let fixture: ComponentFixture<DetalleMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
