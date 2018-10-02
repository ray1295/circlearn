import { TestBed, inject } from '@angular/core/testing';

import { RegisteredService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteredService]
    });
  });

  it('should be created', inject([RegisteredService], (service: RegisteredService) => {
    expect(service).toBeTruthy();
  }));
});
