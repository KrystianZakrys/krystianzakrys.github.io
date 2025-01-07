import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMobileComponent } from './hello-mobile.component';

describe('HelloMobileComponent', () => {
  let component: HelloMobileComponent;
  let fixture: ComponentFixture<HelloMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
