import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesSendComponent } from './sites-send.component';

describe('SitesSendComponent', () => {
  let component: SitesSendComponent;
  let fixture: ComponentFixture<SitesSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitesSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
