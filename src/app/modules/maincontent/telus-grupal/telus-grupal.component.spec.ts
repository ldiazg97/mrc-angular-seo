import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelusGrupalComponent } from './telus-grupal.component';

describe('TelusGrupalComponent', () => {
  let component: TelusGrupalComponent;
  let fixture: ComponentFixture<TelusGrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelusGrupalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelusGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
