import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdmComponent } from './editdm.component';

describe('EditdmComponent', () => {
  let component: EditdmComponent;
  let fixture: ComponentFixture<EditdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
