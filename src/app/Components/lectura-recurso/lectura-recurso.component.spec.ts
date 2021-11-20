import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaRecursoComponent } from './lectura-recurso.component';

describe('LecturaRecursoComponent', () => {
  let component: LecturaRecursoComponent;
  let fixture: ComponentFixture<LecturaRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaRecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
