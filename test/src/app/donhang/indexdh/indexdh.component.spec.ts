import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdhComponent } from './indexdh.component';

describe('IndexdhComponent', () => {
  let component: IndexdhComponent;
  let fixture: ComponentFixture<IndexdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexdhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
