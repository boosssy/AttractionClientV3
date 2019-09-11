import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulOperationPageComponent } from './successful-operation-page.component';

describe('SuccessfulOperationPageComponent', () => {
  let component: SuccessfulOperationPageComponent;
  let fixture: ComponentFixture<SuccessfulOperationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulOperationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulOperationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
