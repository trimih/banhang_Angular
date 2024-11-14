import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamdmComponent } from './sanphamdm.component';

describe('SanphamdmComponent', () => {
  let component: SanphamdmComponent;
  let fixture: ComponentFixture<SanphamdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanphamdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanphamdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
