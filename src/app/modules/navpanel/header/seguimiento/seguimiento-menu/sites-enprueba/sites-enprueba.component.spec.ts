import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesEnpruebaComponent } from './sites-enprueba.component';

describe('SitesEnpruebaComponent', () => {
  let component: SitesEnpruebaComponent;
  let fixture: ComponentFixture<SitesEnpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitesEnpruebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesEnpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
