import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarValComponent } from './var-val.component';

describe('VarValComponent', () => {
  let component: VarValComponent;
  let fixture: ComponentFixture<VarValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarValComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VarValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
