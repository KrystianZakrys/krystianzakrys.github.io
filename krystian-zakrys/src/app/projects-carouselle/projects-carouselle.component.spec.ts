import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarouselleComponent } from './projects-carouselle.component';

describe('ProjectsCarouselleComponent', () => {
  let component: ProjectsCarouselleComponent;
  let fixture: ComponentFixture<ProjectsCarouselleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCarouselleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCarouselleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
