import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatespComponent } from './createsp.component';

describe('CreatespComponent', () => {
  let component: CreatespComponent;
  let fixture: ComponentFixture<CreatespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatespComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
