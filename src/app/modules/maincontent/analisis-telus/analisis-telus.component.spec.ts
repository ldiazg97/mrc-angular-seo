import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisTelusComponent } from './analisis-telus.component';

describe('AnalisisTelusComponent', () => {
  let component: AnalisisTelusComponent;
  let fixture: ComponentFixture<AnalisisTelusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisTelusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisTelusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
