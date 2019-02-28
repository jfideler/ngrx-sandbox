import { inject, TestBed } from '@angular/core/testing';

import { RouteDataService } from './routedata.service';

describe('RouteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteDataService]
    });
  });

  it('should be created', inject([RouteDataService], (service: RouteDataService) => {
    expect(service).toBeTruthy();
  }));

});
