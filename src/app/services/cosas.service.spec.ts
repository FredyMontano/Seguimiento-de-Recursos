import { TestBed } from '@angular/core/testing';

import { CosasService } from './cosas.service';

describe('CosasService', () => {
  let service: CosasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
