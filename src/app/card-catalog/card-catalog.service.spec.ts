import { TestBed } from '@angular/core/testing';

import { CardCatalogService } from './card-catalog.service';

describe('CardCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardCatalogService = TestBed.get(CardCatalogService);
    expect(service).toBeTruthy();
  });
});
