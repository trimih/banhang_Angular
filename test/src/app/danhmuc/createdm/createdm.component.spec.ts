import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedmComponent } from './createdm.component';

describe('CreatedmComponent', () => {
  let component: CreatedmComponent;
  let fixture: ComponentFixture<CreatedmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
