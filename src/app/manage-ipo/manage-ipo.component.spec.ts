import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIPOComponent } from './manage-ipo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageIPOComponent', () => {
  let component: ManageIPOComponent;
  let fixture: ComponentFixture<ManageIPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIPOComponent ],
      imports:[
        RouterTestingModule, 
        HttpClientTestingModule, 
        FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
