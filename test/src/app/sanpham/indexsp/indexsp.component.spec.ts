import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexspComponent } from './indexsp.component';

describe('IndexspComponent', () => {
  let component: IndexspComponent;
  let fixture: ComponentFixture<IndexspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
