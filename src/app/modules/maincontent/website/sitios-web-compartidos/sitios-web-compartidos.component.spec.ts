import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosWebCompartidosComponent } from './sitios-web-compartidos.component';

describe('SitiosWebCompartidosComponent', () => {
  let component: SitiosWebCompartidosComponent;
  let fixture: ComponentFixture<SitiosWebCompartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitiosWebCompartidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitiosWebCompartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
