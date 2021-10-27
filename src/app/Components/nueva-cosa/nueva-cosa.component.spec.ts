import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCosaComponent } from './nueva-cosa.component';

describe('NuevaCosaComponent', () => {
  let component: NuevaCosaComponent;
  let fixture: ComponentFixture<NuevaCosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
