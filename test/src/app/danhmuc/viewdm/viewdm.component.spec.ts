import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdmComponent } from './viewdm.component';

describe('ViewdmComponent', () => {
  let component: ViewdmComponent;
  let fixture: ComponentFixture<ViewdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
