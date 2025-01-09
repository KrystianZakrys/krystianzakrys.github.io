import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloContactMeComponent } from './hello-contact-me.component';

describe('HelloContactMeComponent', () => {
  let component: HelloContactMeComponent;
  let fixture: ComponentFixture<HelloContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloContactMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
