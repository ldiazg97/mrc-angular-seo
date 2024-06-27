import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetenciasComponent } from './setencias.component';

describe('SetenciasComponent', () => {
  let component: SetenciasComponent;
  let fixture: ComponentFixture<SetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
