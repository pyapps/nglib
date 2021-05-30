import { TestBed } from '@angular/core/testing';

import { PyUiService } from './py-ui.service';

describe('PyUiService', () => {
  let service: PyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
