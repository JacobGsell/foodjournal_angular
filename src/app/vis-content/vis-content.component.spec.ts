import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisContentComponent } from './vis-content.component';

describe('VisContentComponent', () => {
  let component: VisContentComponent;
  let fixture: ComponentFixture<VisContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
