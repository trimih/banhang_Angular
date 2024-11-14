import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdmComponent } from './indexdm.component';

describe('IndexdmComponent', () => {
  let component: IndexdmComponent;
  let fixture: ComponentFixture<IndexdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
