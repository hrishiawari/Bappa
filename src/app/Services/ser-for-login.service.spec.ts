import { TestBed, inject } from '@angular/core/testing';

import { SerForLoginService } from './ser-for-login.service';

describe('SerForLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerForLoginService]
    });
  });

  it('should be created', inject([SerForLoginService], (service: SerForLoginService) => {
    expect(service).toBeTruthy();
  }));
});
