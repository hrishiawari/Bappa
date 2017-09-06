import { TestBed, inject } from '@angular/core/testing';

import { LoginOutService } from './login-out.service';

describe('LoginOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginOutService]
    });
  });

  it('should be created', inject([LoginOutService], (service: LoginOutService) => {
    expect(service).toBeTruthy();
  }));
});
