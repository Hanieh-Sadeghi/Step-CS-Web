import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlComponent } from './ul.component';

describe('UlComponent', () => {
  let component: UlComponent;
  let fixture: ComponentFixture<UlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
