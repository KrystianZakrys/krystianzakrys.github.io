import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export interface ProjectDto {
  title: string;
  desc: string;
  imageUrl: string;
  url: string;
  github: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects-carouselle',
  templateUrl: './projects-carouselle.component.html',
  styleUrls: ['./projects-carouselle.component.scss']
})
export class ProjectsCarouselleComponent implements OnInit {
  projects: ProjectDto[] = [
    {
      title: 'Title',
      desc: 'Description',
      github: 'urlGithub',
      imageUrl: 'imgSrc',
      techStack: ['C#','SQL'],
      url: 'url'
    }, {
      title: 'Title',
      desc: 'Description',
      github: 'urlGithub',
      imageUrl: 'imgSrc',
      techStack: ['C#','SQL'],
      url: 'url'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  public slideChanged(){
    console.log('slideChange');
  }

}
