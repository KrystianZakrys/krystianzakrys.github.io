import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoExpSmallComponent } from './yo-exp-small.component';

describe('YoExpSmallComponent', () => {
  let component: YoExpSmallComponent;
  let fixture: ComponentFixture<YoExpSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoExpSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoExpSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
