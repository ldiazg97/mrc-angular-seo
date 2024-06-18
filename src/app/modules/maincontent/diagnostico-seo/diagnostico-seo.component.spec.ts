import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoSeoComponent } from './diagnostico-seo.component';

describe('DiagnosticoSeoComponent', () => {
  let component: DiagnosticoSeoComponent;
  let fixture: ComponentFixture<DiagnosticoSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticoSeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosticoSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
