import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestockexchangesComponent } from './managestockexchanges.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManagestockexchangesComponent', () => {
  let component: ManagestockexchangesComponent;
  let fixture: ComponentFixture<ManagestockexchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestockexchangesComponent ],
      imports:[
        RouterTestingModule, 
        HttpClientTestingModule, 
        FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestockexchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
