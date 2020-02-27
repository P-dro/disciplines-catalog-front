import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCatalogComponent } from './painel-catalog.component';

describe('PainelCatalogComponent', () => {
  let component: PainelCatalogComponent;
  let fixture: ComponentFixture<PainelCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
