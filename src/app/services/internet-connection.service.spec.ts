import { TestBed, inject } from '@angular/core/testing';

import { InternetConnectionService } from './internet-connection.service';

describe('InternetConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternetConnectionService]
    });
  });

  it('should be created', inject([InternetConnectionService], (service: InternetConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
