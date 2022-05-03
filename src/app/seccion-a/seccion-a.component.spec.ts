import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAComponent } from './seccion-a.component';

describe('SeccionAComponent', () => {
  let component: SeccionAComponent;
  let fixture: ComponentFixture<SeccionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
