import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCatalogComponent } from './nav-bar-catalog.component';

describe('NavBarCatalogComponent', () => {
  let component: NavBarCatalogComponent;
  let fixture: ComponentFixture<NavBarCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
