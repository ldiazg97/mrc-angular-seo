import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoMenuComponent } from './seguimiento-menu.component';

describe('SeguimientoMenuComponent', () => {
  let component: SeguimientoMenuComponent;
  let fixture: ComponentFixture<SeguimientoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguimientoMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
