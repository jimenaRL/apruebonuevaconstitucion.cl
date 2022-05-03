import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCComponent } from './seccion-c.component';

describe('SeccionCComponent', () => {
  let component: SeccionCComponent;
  let fixture: ComponentFixture<SeccionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
