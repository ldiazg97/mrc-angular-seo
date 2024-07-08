import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCompComponent } from './organization-comp.component';

describe('OrganizationCompComponent', () => {
  let component: OrganizationCompComponent;
  let fixture: ComponentFixture<OrganizationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
