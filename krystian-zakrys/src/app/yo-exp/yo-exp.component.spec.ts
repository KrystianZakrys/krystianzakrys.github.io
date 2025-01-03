import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoExpComponent } from './yo-exp.component';

describe('YoExpComponent', () => {
  let component: YoExpComponent;
  let fixture: ComponentFixture<YoExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
