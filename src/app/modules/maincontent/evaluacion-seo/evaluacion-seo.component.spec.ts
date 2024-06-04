import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSeoComponent } from './evaluacion-seo.component';

describe('EvaluacionSeoComponent', () => {
  let component: EvaluacionSeoComponent;
  let fixture: ComponentFixture<EvaluacionSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionSeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluacionSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
