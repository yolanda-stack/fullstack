import { TestBed } from '@angular/core/testing';

import { ExchangeDetailService } from './exchangedetail.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExchangedetailService', () => {
  let service: ExchangeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeDetailService],
      imports:[
        RouterTestingModule, 
        HttpClientTestingModule, 
        FormsModule ]
    });
    service = TestBed.inject(ExchangeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
