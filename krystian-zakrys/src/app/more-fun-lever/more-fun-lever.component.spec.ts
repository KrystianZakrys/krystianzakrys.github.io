import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFunLeverComponent } from './more-fun-lever.component';

describe('MoreFunLeverComponent', () => {
  let component: MoreFunLeverComponent;
  let fixture: ComponentFixture<MoreFunLeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFunLeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFunLeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
