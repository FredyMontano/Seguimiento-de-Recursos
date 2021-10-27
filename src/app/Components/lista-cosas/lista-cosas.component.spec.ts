import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCosasComponent } from './lista-cosas.component';

describe('ListaCosasComponent', () => {
  let component: ListaCosasComponent;
  let fixture: ComponentFixture<ListaCosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCosasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
