import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBComponent } from './seccion-b.component';

describe('SeccionBComponent', () => {
  let component: SeccionBComponent;
  let fixture: ComponentFixture<SeccionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
