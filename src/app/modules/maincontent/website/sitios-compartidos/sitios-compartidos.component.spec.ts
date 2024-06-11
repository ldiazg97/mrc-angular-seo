import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosCompartidosComponent } from './sitios-compartidos.component';

describe('SitiosCompartidosComponent', () => {
  let component: SitiosCompartidosComponent;
  let fixture: ComponentFixture<SitiosCompartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitiosCompartidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitiosCompartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
