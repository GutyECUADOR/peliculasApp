import { TestBed } from '@angular/core/testing';

import { PeliculasServiceService } from './peliculas-service.service';

describe('PeliculasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculasServiceService = TestBed.get(PeliculasServiceService);
    expect(service).toBeTruthy();
  });
});
