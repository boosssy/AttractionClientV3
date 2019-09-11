import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionBrowserComponent } from './attraction-browser.component';

describe('AttractionBrowserComponent', () => {
  let component: AttractionBrowserComponent;
  let fixture: ComponentFixture<AttractionBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
