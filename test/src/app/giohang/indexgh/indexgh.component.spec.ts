import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexghComponent } from './indexgh.component';

describe('IndexghComponent', () => {
  let component: IndexghComponent;
  let fixture: ComponentFixture<IndexghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexghComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
