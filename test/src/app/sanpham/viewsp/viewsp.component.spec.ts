import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspComponent } from './viewsp.component';

describe('ViewspComponent', () => {
  let component: ViewspComponent;
  let fixture: ComponentFixture<ViewspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
