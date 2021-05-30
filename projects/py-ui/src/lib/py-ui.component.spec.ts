import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyUiComponent } from './py-ui.component';

describe('PyUiComponent', () => {
  let component: PyUiComponent;
  let fixture: ComponentFixture<PyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
