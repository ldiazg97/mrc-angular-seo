import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegTeamComponent } from './seg-team.component';

describe('SegTeamComponent', () => {
  let component: SegTeamComponent;
  let fixture: ComponentFixture<SegTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
