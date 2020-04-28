import { TestBed } from '@angular/core/testing';

import { IpoDetailService } from './ipodetail.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IpodetailService', () => {
  let service: IpoDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpoDetailService],
      imports:[
        RouterTestingModule, 
        HttpClientTestingModule, 
        FormsModule ]
    });
    service = TestBed.inject(IpoDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
