import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsMobileComponent } from './tools-mobile.component';

describe('ToolsMobileComponent', () => {
  let component: ToolsMobileComponent;
  let fixture: ComponentFixture<ToolsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
