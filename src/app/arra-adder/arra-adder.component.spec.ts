import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraAdderComponent } from './arra-adder.component';

describe('ArraAdderComponent', () => {
  let component: ArraAdderComponent;
  let fixture: ComponentFixture<ArraAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
